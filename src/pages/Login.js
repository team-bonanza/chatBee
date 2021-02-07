import React from 'react';
import {View, Button, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>LOGIN SCREEN</Text>
      <Button onPress={navigateDetails}>SIGN UP</Button>
    </View>
  );
};

export {HomeScreen};
