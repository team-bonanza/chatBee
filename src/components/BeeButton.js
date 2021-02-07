import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {beeButton_style} from '../assets/styles';

function BeeButton(props) {
  return (
    <TouchableOpacity style={beeButton_style.container}>
      <Text style={beeButton_style.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default BeeButton;
