import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

function LoadingProvider() {
  return (
    <LottieView
      source={require('../../assets/gif/bee1.json')}
      resizeMode="center"
      autoplay
      loop
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    />
  );
}

export {LoadingProvider};
