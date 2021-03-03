import React from 'react';
import {
  Text,
  StyleSheet,
<<<<<<< HEAD
  Image,
=======
  Button,
>>>>>>> e7468d48aacd2c5e91cce25c7026d353200fa05c
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Icons from 'react-native-vector-icons/MaterialIcons';

import {
  RTCPeerConnection,
  RTCView,
  mediaDevices,
  RTCIceCandidate,
  RTCSessionDescription,
} from 'react-native-webrtc';
import {db} from '../utilities/firebase';

//About the style
const ICONCOLOR = 'rgba(250,250,250,0.5)';

const configuration = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

function RoomScreen({navigation, route}) {
  const {id: id} = route.params;

  function onBackPress() {
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
          minWidth: 500, // Provide your own width, height and frame rate here
          minHeight: 300,
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
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/bee.png')} style={styles.logo} />
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.question}>BURALARA YAZ GÜNÜ SORU YAĞIYOR</Text>
        </View>
      </View>

      <View style={styles.callButtons}>
        <View styles={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonCover} onPress={onBackPress}>
            <Icons name="call-end" size={30} color={'red'} />
          </TouchableOpacity>
        </View>
        <View styles={styles.buttonContainer}>
          {!localStream && (
            <TouchableOpacity
              style={styles.buttonCover}
              onPress={startLocalStream}>
              <Icons name="call" size={30} color={ICONCOLOR} />
            </TouchableOpacity>
          )}
          {localStream && (
            <TouchableOpacity
              style={styles.buttonCover}
              onPress={() => startCall(id)}
              disabled={!!remoteStream}>
              <Icons name="call" size={30} color={ICONCOLOR} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {localStream && (
        <View style={styles.VolumeAndFlip}>
          <TouchableOpacity style={styles.volumeButton} onPress={switchCamera}>
            <Icons name="flip-camera-android" size={30} color={ICONCOLOR} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.volumeButton}
            title={`${isMuted ? 'Unmute' : 'Mute'} stream`}
            onPress={toggleMute}
            disabled={!remoteStream}>
            <Icons name="volume-mute" size={30} color={ICONCOLOR} />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.callingContainer}>
        <View style={styles.rtcview1}>
          {localStream ? (
            <RTCView
              style={styles.rtc1}
              streamURL={localStream && localStream.toURL()}
            />
          ) : (
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                textAlignVertical: 'center',
                fontSize: 20,
              }}>
              Kameranı Aç da Gül Cemalini Görelim
            </Text>
          )}
        </View>
        <View style={styles.rtcview2}>
          {remoteStream ? (
            <RTCView
              style={styles.rtc2}
              streamURL={remoteStream && remoteStream.toURL()}
            />
          ) : (
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                textAlignVertical: 'center',
                justifyContent: 'center',
                fontSize: 20,
                padding: 20,
              }}>
              Sanırım o da utanıyor
            </Text>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    position: 'absolute',
    top: 10,
    padding: 10,
    width: Dimensions.get('window').width,
    marginTop: 5,
    zIndex: 1004,
  },
  logoContainer: {
    backgroundColor: 'rgba(250,250,250,0.1)',
    width: 55,
    height: 55,
    padding: 40,
    marginBottom: 10,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logo: {
    width: 55,
    height: 55,
  },
  questionContainer: {
    backgroundColor: 'rgba(250,250,250, 0.5)',
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  question: {
    textAlign: 'center',
  },
  callingContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    margin: 0,
    padding: 0,
  },
  rtcview1: {
    position: 'relative',
    backgroundColor: 'green',
    borderRadius: 5,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    bottom: 0,
    right: 0,

    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  rtc1: {
    width: Dimensions.get('window').width * 1.55,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  rtcview2: {
    position: 'absolute',
    bottom: 55,
    right: 0,
    zIndex: 100,
    backgroundColor: '#f546dd',
    borderRadius: 5,
    margin: 25,
    width: 150,
    height: 250,
  },

  rtc2: {
    width: 100,
    height: 300,
    margin: 5,
    borderRadius: 5,
  },
  VolumeAndFlip: {
    position: 'absolute',
    bottom: 40,
    left: 10,
    zIndex: 1005,
    flexDirection: 'column',
  },
  volumeButton: {
    backgroundColor: 'rgba(250,250,250, 0.5)',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 15,
  },

  callButtons: {
    position: 'absolute',
    zIndex: 102,
    bottom: 40,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    paddingRight: 40,
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  buttonCover: {
    backgroundColor: 'rgba(250,250,250, 0.5)',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,

    marginRight: 40,
  },
});
export {RoomScreen};
