import React from 'react';
import {TextInput, View, Text} from 'react-native';
import {beeInput_styles} from '../assets/styles';

export default function BeeInput({error, isTouched, ...otherProps}) {
  return (
    <View style={beeInput_styles.container}>
      <View style={beeInput_styles.formContainer}>
        <TextInput {...otherProps} />
      </View>
      {isTouched && error && (
        <Text style={beeInput_styles.errorText}>{error}</Text>
      )}
    </View>
  );
}
