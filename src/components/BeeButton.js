import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {beeButton_style} from '../assets/styles';

function BeeButton({title, ...otherProps}) {
  return (
    <TouchableOpacity style={beeButton_style.container} {...otherProps}>
      <Text style={beeButton_style.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default BeeButton;
