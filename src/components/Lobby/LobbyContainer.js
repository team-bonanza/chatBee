import React from 'react';
import {View, Text, Image} from 'react-native';
import {lobby_container_styles} from '../../assets/styles';

export function LobbyContainer({user}) {
  return (
    <View style={lobby_container_styles.photoMainContainer}>
      <View
        style={[
          lobby_container_styles.card,
          {borderColor: user.isReady ? 'green' : 'yellow'},
        ]}>
        <View style={lobby_container_styles.photoContianer}>
          <Image
            source={{uri: user.photoURL}}
            style={lobby_container_styles.photo}
          />
        </View>
        <View style={lobby_container_styles.displayNameContianer}>
          <Text style={lobby_container_styles.displayName}>
            {user.displayName}
          </Text>
        </View>
      </View>
    </View>
  );
}
