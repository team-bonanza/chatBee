import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import BeeView from '../components/BeeView';
import BeeInput from '../components/BeeInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {copy_icon_styles} from '../assets/styles';
import auth from '@react-native-firebase/auth';
import useAuth from '../hooks/useAuth';
import {LoadingProvider} from '../components/Loading/LoadingProvider';

function HomePage({navigation}) {
  const {loading} = useAuth();

  function signOut() {
    auth()
      .signOut()
      .then(() => navigation.navigate('Login'));
  }

  if (loading) {
    return <LoadingProvider />;
  }

  return (
    <BeeView>
      <View style={copy_icon_styles.container}>
        <Text style={copy_icon_styles.input}>ODA OLUŞTUR</Text>
        <TouchableOpacity style={copy_icon_styles.iconCopy}>
          <Ionicons name="copy-outline" size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <View style={copy_icon_styles.container}>
        <TextInput
          placeholder="KOD GİRİNİZ"
          placeholderTextColor="#333666"
          style={copy_icon_styles.input}
        />
        <TouchableOpacity style={copy_icon_styles.iconCopy}>
          <Ionicons name="ios-checkbox" size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => signOut()}
          style={copy_icon_styles.iconOut}>
          <FontAwesome name="sign-out" size={50} color={'#00509D'} />
        </TouchableOpacity>
      </View>
    </BeeView>
  );
}

export {HomePage};
