import * as React from 'react';
import {Text, StyleSheet, Alert, Dimensions} from 'react-native';
import BeeView from '../components/BeeView';
import {useNavigation} from '@react-navigation/native';
import LoginContainer from '../components/Login/LoginContainer';
import useAuth from '../hooks/useAuth';
import Video from 'react-native-video';
import {LoadingProvider} from '../components/Loading/LoadingProvider';
//TODO: loading screen
//TODO:
const LoginPage = () => {
  const navigation = useNavigation();
  const {
    loading,
    error,
    response,
    _,
    signIn,
    errorReset,
    responseReset,
  } = useAuth();

  async function handleSubmit(values) {
    await signIn(values);
    //navigation.navigate('Home Page');
  }

  function handleRegister() {
    navigation.navigate('Sign Up');
  }

  if (response) {
    navigation.navigate('Home Page');
    responseReset();
  }

  if (error) {
    Alert.alert('ChatBee', error.message);
    errorReset();
  }
  return (
    <BeeView>
      <Video
        source={require('../assets/chatbee-video.mp4')}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />
      <LoginContainer
        loading={loading}
        onSubmit={handleSubmit}
        onRegister={handleRegister}
      />
    </BeeView>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'stretch',
  },
});

export {LoginPage};
