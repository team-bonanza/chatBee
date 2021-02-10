import React, { version } from 'react';
import {Text, StyleSheet, Button, View, Dimensions} from 'react-native';
import {RTCPeerConnection, RTCView, mediaDevices, RTCIceCandidate, RTCSessionDescription} from 'react-native-webrtc';
import {db} from '../utilities/firebase';

const configuration = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

function RoomScreen({navigation, route}) {
  const {id: roomId} = route.params;

  function onBackPress() {
    console.log('basıyo muuu')
    if (cachedLocalPC) {
      cachedLocalPC.removeStream(localStream);
      cachedLocalPC.close();
    }
    setLocalStream();
    setRemoteStream();
    setCachedLocalPC();
    navigation.goBack();
  }

  const [localStream, setLocalStream] = React.useState();
  const [remoteStream, setRemoteStream] = React.useState();
  const [cachedLocalPC, setCachedLocalPC] = React.useState();
  const [isMuted, setIsMuted] = React.useState(false);

  const startLocalStream = async () => {
    // isFront will determine if the initial camera should face user or environment
    const isFront = true;
    const devices = await mediaDevices.enumerateDevices();
    const facing = isFront ? 'front' : 'environment';
    const videoSourceId = devices.find(
      (device) => device.kind === 'videoinput' && device.facing === facing,
    );
    const facingMode = isFront ? 'user' : 'environment';
    const constraints = {
      audio: true,
      video: {
        mandatory: {
          minWidth: 50, // Provide your own width, height and frame rate here
          minHeight: 30,
          minFrameRate: 30,
        },
        facingMode,
        optional: videoSourceId ? [{sourceId: videoSourceId}] : [],
      },
    };
    const newStream = await mediaDevices.getUserMedia(constraints);
    setLocalStream(newStream);
  };

  const startCall = async (id) => {
    const localPC = new RTCPeerConnection(configuration);
    localPC.addStream(localStream);

    const roomRef = await db.collection('rooms').doc(id);
    const callerCandidatesCollection = roomRef.collection('callerCandidates');
    localPC.onicecandidate = (e) => {
      if (!e.candidate) {
        console.log('Got final candidate!');
        return;
      }
      callerCandidatesCollection.add(e.candidate.toJSON());
    };

    localPC.onaddstream = (e) => {
      if (e.stream && remoteStream !== e.stream) {
        console.log('RemotePC received the stream call', e.stream);
        setRemoteStream(e.stream);
      }
    };

    const offer = await localPC.createOffer();
    await localPC.setLocalDescription(offer);

    const roomWithOffer = {offer};
    await roomRef.set(roomWithOffer);

    roomRef.onSnapshot(async (snapshot) => {
      const data = snapshot.data();
      if (!localPC.currentRemoteDescription && data.answer) {
        const rtcSessionDescription = new RTCSessionDescription(data.answer);
        await localPC.setRemoteDescription(rtcSessionDescription);
      }
    });

    roomRef.collection('calleeCandidates').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        if (change.type === 'added') {
          let data = change.doc.data();
          await localPC.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });

    setCachedLocalPC(localPC);
  };

  const switchCamera = () => {
    localStream.getVideoTracks().forEach((track) => track._switchCamera());
  };

  // Mutes the local's outgoing audio
  const toggleMute = () => {
    if (!remoteStream) {
      return;
    }
    localStream.getAudioTracks().forEach((track) => {
      // console.log(track.enabled ? 'muting' : 'unmuting', ' local track', track);
      track.enabled = !track.enabled;
      setIsMuted(!track.enabled);
    });
  };
  
  return (
    <>
    <Text style={styles.heading}>Call Screen</Text>
      <View style={styles.callButtons}>
        <View>
          <Button title="Click to stop call" onPress={onBackPress} />
        </View>
        <View>
          {!localStream && (
            <Button title="Click to start stream" onPress={startLocalStream} />
            )}
          {localStream && (
            <Button
            title="Click to start call"
            onPress={() => startCall(roomId)}
            disabled={!!remoteStream}
            />
            )}
        </View>
      </View>
      

      {localStream && (
        <View style={styles.toggleButtons}>
          <Button title="Switch camera" onPress={switchCamera} />
          <Button
            title={`${isMuted ? 'Unmute' : 'Mute'} stream`}
            onPress={toggleMute}
            disabled={!remoteStream}
          />
        </View>
      )}
      <View style={{display: 'flex', flex: 1}}>
        <View style={styles.firstPerson}>
          {localStream && (
            <RTCView
              streamURL={localStream && localStream.toURL()}
            />
          )}
        </View>
        <View style={styles.secondPerson}>
          {remoteStream && (
            <RTCView
              streamURL={remoteStream && remoteStream.toURL()}
            />
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    alignSelf: 'center',
    fontSize: 30,
    color:'white',
    backgroundColor: 'grey'
  },
  firstPerson:{
    flex: 1,
    backgroundColor: 'black',
  },
  secondPerson: {
    position: 'absolute',
    right: 10,
    bottom: 70,
    borderRadius: 10,
    width: Dimensions.get('screen').width/3,
    height:  Dimensions.get('screen').height/4,
    backgroundColor: 'black',
    margin: 5,
    backgroundColor: 'gray'
  },
  position:{
    position: 'absolute',
    bottom: 5
  },
  toggleButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  callButtons: {
    bottom: 10,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export {RoomScreen};
