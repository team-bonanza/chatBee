import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import RandomQuote from '../components/RandomQuote';

import Icons from 'react-native-vector-icons/MaterialIcons';
import {room_screen_styles} from '../assets/styles';
import LottieView from 'lottie-react-native';

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
      <View style={room_screen_styles.topContainer}>
        <View style={room_screen_styles.questionContainer}>
          <View style={room_screen_styles.question}>
            <RandomQuote />
          </View>
        </View>
      </View>

      <View style={room_screen_styles.callButtons}>
        <View>
          <TouchableOpacity
            style={room_screen_styles.buttonCover}
            onPress={onBackPress}>
            <Icons name="call-end" size={30} color={'red'} />
          </TouchableOpacity>
        </View>
        <View>
          {!localStream && (
            <TouchableOpacity
              style={room_screen_styles.buttonCover}
              onPress={startLocalStream}>
              <Icons name="call" size={30} color={ICONCOLOR} />
            </TouchableOpacity>
          )}
          {localStream && (
            <TouchableOpacity
              style={room_screen_styles.buttonCover}
              onPress={() => startCall(id)}
              disabled={!!remoteStream}>
              <Icons name="call" size={30} color={ICONCOLOR} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {localStream && (
        <View style={room_screen_styles.VolumeAndFlip}>
          <TouchableOpacity
            style={room_screen_styles.volumeButton}
            onPress={switchCamera}>
            <Icons name="flip-camera-android" size={30} color={ICONCOLOR} />
          </TouchableOpacity>

          <TouchableOpacity
            style={room_screen_styles.volumeButton}
            title={`${isMuted ? 'Unmute' : 'Mute'} stream`}
            onPress={toggleMute}
            disabled={!remoteStream}>
            <Icons name="volume-mute" size={30} color={ICONCOLOR} />
          </TouchableOpacity>
        </View>
      )}

      <View style={room_screen_styles.callingContainer}>
        <View style={room_screen_styles.rtcview1}>
          {localStream ? (
            <RTCView
              style={room_screen_styles.rtc1}
              streamURL={localStream && localStream.toURL()}
            />
          ) : (
            <View style={room_screen_styles.gifArea}>
              <LottieView
                style={room_screen_styles.gif}
                source={require('../assets/gif/bee1.json')}
                autoPlay
                loop
              />

              <Text style={room_screen_styles.gifText}>
                Kameranı aç da gül cemalini görelim
              </Text>
            </View>
          )}
        </View>
        <View style={room_screen_styles.rtcview2}>
          {remoteStream && (
            <RTCView
              style={room_screen_styles.rtc2}
              streamURL={remoteStream && remoteStream.toURL()}
            />
          )}
        </View>
      </View>
    </>
  );
}

export {RoomScreen};
