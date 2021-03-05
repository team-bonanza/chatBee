import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
function OnboardingScreens({navigation}) {
  async function onNavigate() {
    // navigation.navigate('Home Page');
    await AsyncStorage.setItem('hasLaunch', 'true');
    navigation.navigate('HomeStack');
  }
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/onboarding-first.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/onboarding-second.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/onboarding-third.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
      onDone={() => onNavigate()}
    />
  );
}

export {OnboardingScreens};
