import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {beeButtonOutline_style} from '../assets/styles';

function BeeButtonOutline(props) {
  return (
    <TouchableOpacity style={beeButtonOutline_style.container}>
      <Text style={beeButtonOutline_style.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default BeeButtonOutline;
