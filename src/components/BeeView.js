import React from 'react';
import {Appearance, ImageBackground, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {beeView_style} from '../assets/styles';

function BeeView({children}) {
  const BACKGROUND_DARK = [
    '#243b55',
    '#20344c',
    '#1c2c42',
    '#182539',
    '#141e30',
  ];
  const BACKGROUND_LIGHT = ['#FFF', '#edf0ed', '#d8ded8', '#c5cfc5', '#abbaab'];

  const imageDark = {uri: '../assets/bgDark.jpg'};
  const imageLight = {uri: '../assets/bgLightTwo.jpg'};

  const theme = Appearance.getColorScheme();
  const image = theme === 'dark' ? imageDark : imageLight;

  return (
    <ImageBackground style={beeView_style.container} source={image}>
      {children}
    </ImageBackground>
  );
}

export default BeeView;
