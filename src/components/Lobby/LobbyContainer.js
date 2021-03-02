import React from 'react';
import {View, Text, Image} from 'react-native';
import {lobby_container_styles} from '../../assets/styles';
import auth from '@react-native-firebase/auth';

export default function LobbyContainer() {
  return (
    <View style={lobby_container_styles.photoMainContainer}>
      <View style={lobby_container_styles.card}>
        <View style={lobby_container_styles.photoContianer}>
          <Image
            source={{uri: auth().currentUser.photoURL}}
            style={lobby_container_styles.photo}
          />
        </View>
        <View style={lobby_container_styles.displayNameContianer}>
          <Text style={lobby_container_styles.displayName}>
            {auth().currentUser.displayName}
          </Text>
        </View>
      </View>
    </View>
  );
}
