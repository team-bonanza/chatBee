import * as React from 'react';
import {Text, View,StyleSheet,Appearance} from 'react-native';

const Main = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>zero to dark mode</Text>
    </View>
  );
};
const theme=Appearance.getColorScheme();
const BACKGROUND=theme==='dark' ? '#011627' : 'white';
const TEXT=theme==='dark' ? 'white':'black';

const style=StyleSheet.create({
  container:{
    backgroundColor:BACKGROUND,
    alignItems:'center',
    flex:1,
    justifyContent:'center',
  },
  text:{
    color:TEXT,
    fontSize:24

  }
})

export default Main;
