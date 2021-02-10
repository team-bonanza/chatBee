import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

function LoadingProvider() {
  return (
    <LottieView
      source={require('../../assets/gif/bee1.json')}
      autoplay
      loop
      style={{height: Dimensions.get('window').height / 2}}
    />
  );
}

export {LoadingProvider};
