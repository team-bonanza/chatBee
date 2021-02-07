import React from 'react';
import {Appearance} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {beeView_style} from '../assets/styles';

function BeeView({children}) {
  const BACKGROUND_DARK = ['#243b55','#20344c','#1c2c42','#182539', '#141e30'];
  const BACKGROUND_LIGHT = ['#FFF','#edf0ed','#d8ded8','#c5cfc5', '#abbaab'];

  const theme = Appearance.getColorScheme();
  const BACKGROUND = theme === 'dark' ? BACKGROUND_DARK : BACKGROUND_LIGHT;

  return (
    <LinearGradient style={beeView_style.container} colors={BACKGROUND}>
      {children}
    </LinearGradient>
  );
}

export default BeeView;
