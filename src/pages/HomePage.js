import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import BeeView from '../components/BeeView';
import BeeInput from '../components/BeeInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {copy_icon_styles} from '../assets/styles';

function HomePage() {
  return (
    <BeeView>
      <View style={copy_icon_styles.container}>
        <TextInput placeholder="ID GİRİNİZ" style={copy_icon_styles.input} />
        <TouchableOpacity style={copy_icon_styles.iconCopy}>
          <Ionicons name="copy-outline" size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <View style={copy_icon_styles.container}>
        <TextInput placeholder="KOD GİRİNİZ" style={copy_icon_styles.input} />
        <TouchableOpacity style={copy_icon_styles.iconCopy}>
          <Ionicons name="ios-checkbox" size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={copy_icon_styles.iconOut}>
          <FontAwesome name="sign-out" size={50} color={'#00509D'} />
        </TouchableOpacity>
      </View>
    </BeeView>
  );
}

export {HomePage};
