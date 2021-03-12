import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

async function setOnboardingState() {
  AsyncStorage.setItem('hasLaunch', 'true');
}

function OnboardingScreens({navigation}) {
  function onNavigate() {
    setOnboardingState();
    navigation.navigate('HomeStack');
  }
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={styles.image}
              source={require('../assets/onboarding-first.png')}
            />
          ),
          title: 'Easily Sing',
          subtitle: 'Join us easily with google sing..',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={styles.image}
              source={require('../assets/onboarding-second.png')}
            />
          ),
          title: 'Invite Friends',
          subtitle: 'Create call room and invite your friends..',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={styles.image}
              source={require('../assets/onboarding-third.png')}
            />
          ),
          title: "Let's Play",
          subtitle: '',
        },
      ]}
      onDone={() => onNavigate()}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 3,
  },
});

export {OnboardingScreens};
