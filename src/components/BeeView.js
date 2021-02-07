import React from 'react';
import {Appearance, ImageBackground, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {beeView_style} from '../assets/styles';

function BeeView({children}) {
  const imageDark = require('../assets/bgDark.jpg');
  const imageLight = require('../assets/bgLightTwo.jpg');

  const theme = Appearance.getColorScheme();
  const image = theme === 'dark' ? imageDark : imageLight;

  return (
    <ImageBackground style={beeView_style.container} source={image}>
      {children}
    </ImageBackground>
  );
}

export default BeeView;
