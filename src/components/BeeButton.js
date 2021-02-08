import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {beeButton_style} from '../assets/styles';

function BeeButton({title, loading, ...otherProps}) {
  return (
    <TouchableOpacity
      style={beeButton_style.container}
      {...otherProps}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={beeButton_style.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

export default BeeButton;
