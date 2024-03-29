import React from 'react';
import {Appearance, ImageBackground, View} from 'react-native';
import {beeView_style} from '../assets/styles';

function BeeView({children}) {
  const imageDark = require('../assets/bgDarkTwo.jpg');
  const imageLight = require('../assets/Clouds.jpg');

  const theme = Appearance.getColorScheme();
  const image = theme === 'dark' ? imageDark : imageLight;

  return (
    <ImageBackground style={beeView_style.container} source={image}>
      {children}
    </ImageBackground>
  );
}

export default BeeView;
