import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import BeeView from './components/BeeView';

const Main = () => {
  return (
    <BeeView>
      <Text style={style.text}>zero to dark mode</Text>
    </BeeView>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});

export default Main;
