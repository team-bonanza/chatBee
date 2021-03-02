import React from 'react';
import {Text, Image, Button, View, TouchableOpacity, Share} from 'react-native';

import storage from '@react-native-firebase/storage';

import BeeView from '../components/BeeView';
import {LobbyContainer} from '../components/Lobby';
import {lobby_screen_styles} from '../assets/styles';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Clipboard from '@react-native-clipboard/clipboard';

import {logo} from '../assets/images';

function LobbyScreen({navigation, route}) {
  const {
    id: id,
    toScreen: toScreen,
    roomRef: roomRef,
    roomSnapshot: roomSnapshot,
  } = route.params;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Lets Play with BeeChat \n Chat Link: \n ${id}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const copyToClipboard = () => {
    Clipboard.setString(id);
    console.log('Copy to clipboard');
  };

  function onNavigate(screen) {
    navigation.navigate(screen, {id: id});
  }

  //TODO: Flatliste Gidecek Olan Component LobbyContainer

  return (
    <BeeView>
      <View style={lobby_screen_styles.mainContainer}>
        <View style={lobby_screen_styles.topContainer}>
          {/* <Image source={logo._W} style={lobby_screen_styles.logo} /> */}

          <Image
            source={require('../assets/bee.png')}
            style={lobby_screen_styles.logo}
          />

          <View style={lobby_screen_styles.inviteContainer}>
            <TouchableOpacity
              style={lobby_screen_styles.shareIcon}
              onPress={onShare}>
              <Icons
                style={lobby_screen_styles.icon}
                name="share-variant"
                size={30}
              />
            </TouchableOpacity>
            <Text numberOfLines={1} style={lobby_screen_styles.inviteId}>
              {id}
            </Text>
            <TouchableOpacity
              style={lobby_screen_styles.copyIcon}
              onPress={() => copyToClipboard()}>
              <Icons
                style={lobby_screen_styles.icon}
                name="content-copy"
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={lobby_screen_styles.streamButtonContainer}
          onPress={() => onNavigate(toScreen)}>
          <Text style={lobby_screen_styles.streamButton}>
            Click to start stream
          </Text>
        </TouchableOpacity>
      </View>
      <View style={lobby_screen_styles.listContainer}>
        <Text style={lobby_screen_styles.roomTitle}>Your Room</Text>
        <View style={lobby_screen_styles.lobbyContainer}>
          <LobbyContainer />
        </View>
      </View>
      <View style={lobby_screen_styles.buttonsContainer}>
        <Text>Buttons</Text>
      </View>
    </BeeView>
  );
}

export {LobbyScreen};
