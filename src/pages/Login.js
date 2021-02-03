import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Button,
  Divider,
  Layout,
  Text,
  TopNavigation,
} from '@ui-kitten/components';

const Login = ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h4">LOGIN SCREEN</Text>
        <Button onPress={navigateDetails}>SIGN UP</Button>
      </Layout>
    </SafeAreaView>
  );
};

export {Login};
