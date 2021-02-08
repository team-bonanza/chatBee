import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {beeButtonOutline_style} from '../assets/styles';

function BeeButtonOutline({title, loading, ...otherProps}) {
  return (
    <TouchableOpacity
      style={beeButtonOutline_style.container}
      {...otherProps}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={beeButtonOutline_style.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

export default BeeButtonOutline;
