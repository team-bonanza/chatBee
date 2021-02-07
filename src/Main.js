import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import BeeView from './components/BeeView';
import BeeButton from './components/BeeButton';
import BeeButtonOutline from './components/BeeButtonOutline';

const Main = () => {
  return (
    <BeeView>
      <BeeButton title="GİRİŞ YAP" />
      <BeeButtonOutline title="Kayıt Ol" />
    </BeeView>
  );
};

export default Main;
