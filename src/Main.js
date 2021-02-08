import * as React from 'react';
import {Text, StyleSheet, Alert} from 'react-native';
import BeeView from './components/BeeView';
import {useNavigation} from '@react-navigation/native';
import LoginContainer from './components/Login/LoginContainer';
import useAuth from './hooks/useAuth';
const Main = () => {
  // const navigation=useNavigation();
  const {loading, error, login} = useAuth();

  async function handleSubmit(values) {
    await login(values);
    Alert.alert('Aferinn!!');
    //TODO : navigation.navigate('Feed')
  }

  function handleRegister() {
    // navigation.navigate('Sign');
  }
  if (error) {
    Alert.alert('ChatBee', error.message);
  }

  return (
    <BeeView>
      <LoginContainer
        loading={loading}
        onSubmit={handleSubmit}
        onRegister={handleRegister}
      />
    </BeeView>
  );
};

export default Main;
