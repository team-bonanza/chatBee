import React, {useState, useEffect} from 'react';
import {Text, Alert, TouchableOpacity} from 'react-native';
import BeeView from '../components/BeeView';
import {useNavigation} from '@react-navigation/native';
import {login_page_styles} from '../assets/styles';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {LoadingProvider} from '../components/Loading/LoadingProvider';

import useAuth from '../hooks/useAuth';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

//TODO: loading screen
//TODO: google sigin için hooks .
//TODO: google button

const LoginPage = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [user, setUser] = useState([]);

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

  if (loading) {
    return <LoadingProvider />;
  }

  if (response && !error) {
    navigation.navigate('Home Page');
  }
  if (error) {
    Alert.alert('ChatBee', error.message);
    errorReset();
  }

  const signGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setloggedIn(true);

      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth()
        .signInWithCredential(credential)
        .then(() => navigation.navigate('Home Page'));
    } catch (googleError) {
      if (googleError.code) {
        Alert.alert('Error', googleError.code);
      }
    }
  };
  function onAuthStateChanged(user) {
    setUser(user);
    //console.log("user", user);
    if (user) {
      setloggedIn(true);
    }
  }
  return (
    <BeeView>
      <Video
        source={require('../assets/chatbee-video.mp4')}
        style={login_page_styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />

      <TouchableOpacity
        style={login_page_styles.googleSign}
        onPress={signGoogle}>
        <Icon
          name="google"
          size={25}
          style={login_page_styles.googleSignIcon}
        />
        <Text style={login_page_styles.googleSignText}>
          Sign in with Google
        </Text>
      </TouchableOpacity>
    </BeeView>
  );
};

export {LoginPage};
