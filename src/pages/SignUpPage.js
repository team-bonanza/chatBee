import React from 'react';
import {View, Text, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import BeeView from '../components/BeeView';
import SignUpContainer from '../components/SignUpPages/SignUpContainer';

export function SignUpPage(props) {
  const navigation = useNavigation();
  const {loading, error, sign} = useAuth();

  async function handleSubmit(values) {
    await sign(values);
    navigation.navigate('Login');
  }
  if (error) {
    Alert.alert('ChatBee', error.message);
  }
  return (
    <BeeView >
      <SignUpContainer 
        loading={loading}
        onSubmit={handleSubmit}
        onLogin={() => navigation.navigate('Login')}
      />
    </BeeView>
  );
}