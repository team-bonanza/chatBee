import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, Alert, Dimensions, Button} from 'react-native';
import BeeView from '../components/BeeView';
import {useNavigation} from '@react-navigation/native';
import LoginContainer from '../components/Login/LoginContainer';
import useAuth from '../hooks/useAuth';
import Video from 'react-native-video';
import auth from '@react-native-firebase/auth';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {LoadingProvider} from '../components/Loading/LoadingProvider';
//TODO: loading screen
//TODO: google sigin için hooks .
//TODO: google button

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
    //responseReset();
  }
  if (error) {
    Alert.alert('ChatBee', error.message);
    errorReset();
  }
  const [loggedIn, setloggedIn] = useState(false);
  const [user, setUser] = useState([]);

  const signGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setloggedIn(true);
      console.log('dd');
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth()
        .signInWithCredential(credential)
        .then(() => navigation.navigate('Home Page'));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        console.log(error);
        alert(error);
      }
    }
  };
  function onAuthStateChanged(user) {
    setUser(user);
    console.log(user);
    if (user) {
      setloggedIn(true);
    }
  }
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '852500428858-8ubvb56ropsl22all9vdq12mc6qkhafc.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
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
      <Button title="Google Sign-In" onPress={signGoogle} />
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
