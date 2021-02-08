import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import BeeView from './components/BeeView';
import BeeButton from './components/BeeButton';
import BeeButtonOutline from './components/BeeButtonOutline';
import BeeInput from './components/BeeInput';

const Main = () => {
  return (
    <BeeView>
      <BeeInput />
      <BeeButton title="GİRİŞ YAP" />
      <BeeButtonOutline title="Kayıt Ol" />
    </BeeView>
  );
};

export default Main;
