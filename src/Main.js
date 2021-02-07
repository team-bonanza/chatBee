import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import BeeView from './components/BeeView';
import BeeButton from './components/BeeButton';

const Main = () => {
  return (
    <BeeView>
      <BeeButton title="GİRİŞ YAP" />
    </BeeView>
  );
};

export default Main;
