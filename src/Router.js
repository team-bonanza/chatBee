/*import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {AppNavigator} from './pages/Navigation';

export default () => (
  <>
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);*/

import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {mediaDevices, RTCView} from 'react-native-webrtc';

const App: () => React$Node = () => {
  const [stream, setStream] = useState(null);
  const start = async () => {
    const isFront = true;
    const devices = await mediaDevices.enumerateDevices();
    // Bağlı media cihazları listelenir.
    // [{"deviceId": "0", "facing": "environment", "groupId": "", "kind": "videoinput", "label": "0"},
    //{"deviceId": "1", "facing": "front", "groupId": "", "kind": "videoinput", "label": "1"},
    // {"deviceId": "audio-1", "groupId": "", "kind": "audioinput", "label": "Audio"}]
    const facing = isFront ? 'front' : 'environment';
    const videoSourceId = devices.find(
      (device) => device.kind === 'videoinput' && device.facing === facing,
    );
    const facingMode = isFront ? 'user' : 'environment';

    const constraints = {
      audio: true,
      video: {
        mandatory: {
          minWidth: 500,
          minHeight: 300,
          minFrameRate: 30,
        },
        facingMode,
        optional: videoSourceId ? [{sourceId: videoSourceId}] : [],
      },
    };
    const newStream = await mediaDevices.getUserMedia(constraints);
    console.log(newStream);
    setStream(newStream);
  };

  const stop = () => {
    console.log('stop');
    if (stream) {
      stream.release();
      setStream(null);
    }
  };

  const switchCamera = () => {
    stream.getVideoTracks().forEach((track) => track._switchCamera());
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        {stream && <RTCView streamURL={stream.toURL()} style={styles.stream} />}
        <View style={styles.footer}>
          <Button title="Start" onPress={start} />
          <Button title="Stop" onPress={stop} />
          <Button title="diğer kamera" onPress={switchCamera} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    ...StyleSheet.absoluteFill,
  },
  stream: {
    flex: 1,
  },
  footer: {
    backgroundColor: Colors.lighter,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default App;
