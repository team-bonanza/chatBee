import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, Button, View} from 'react-native';
import {
  RTCPeerConnection,
  RTCView,
  mediaDevices,
  RTCIceCandidate,
  RTCSessionDescription,
} from 'react-native-webrtc';

import RandomQuote from '../components/RandomQuote';

import Icons from 'react-native-vector-icons/MaterialIcons';
import {room_screen_styles} from '../assets/styles';
import LottieView from 'lottie-react-native';

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

function JoinScreen({navigation, route}) {
  const {
    id: roomId,
    roomRef: roomRef,
    roomSnapshot: roomSnapshot,
  } = route.params;

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

  const [localStream, setLocalStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [cachedLocalPC, setCachedLocalPC] = useState();

  const [isMuted, setIsMuted] = useState(false);

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

  const joinCall = async (id) => {
    const localPC = new RTCPeerConnection(configuration);
    localPC.addStream(localStream);

    const calleeCandidatesCollection = roomRef.collection('calleeCandidates');
    localPC.onicecandidate = (e) => {
      if (!e.candidate) {
        console.log('Got final candidate!');
        return;
      }
      calleeCandidatesCollection.add(e.candidate.toJSON());
    };

    localPC.onaddstream = (e) => {
      if (e.stream && remoteStream !== e.stream) {
        console.log('RemotePC received the stream join', e.stream);
        setRemoteStream(e.stream);
      }
    };

    const offer = roomSnapshot.data().offer;
    await localPC.setRemoteDescription(new RTCSessionDescription(offer));

    const answer = await localPC.createAnswer();
    await localPC.setLocalDescription(answer);

    const roomWithAnswer = {answer};
    await roomRef.update(roomWithAnswer);

    roomRef.collection('callerCandidates').onSnapshot((snapshot) => {
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
        <View styles={styles.buttonContainer}>
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
              onPress={() => joinCall(roomId)}
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

export {JoinScreen};
