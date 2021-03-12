import React from 'react';
import {View, Text, Image} from 'react-native';
import {lobby_container_styles} from '../../assets/styles';
import auth from '@react-native-firebase/auth';

export function LobbyContainer({name, photo}) {
  return (
    <View style={lobby_container_styles.photoMainContainer}>
      <View style={lobby_container_styles.card}>
        <View style={lobby_container_styles.photoContianer}>
          <Image source={photo} style={lobby_container_styles.photo} />
        </View>
        <View style={lobby_container_styles.displayNameContianer}>
          <Text style={lobby_container_styles.displayName}>{name}</Text>
        </View>
      </View>
    </View>
  );
}

// source={{uri: auth().currentUser.photoURL}}
