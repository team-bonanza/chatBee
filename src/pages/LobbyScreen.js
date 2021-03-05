import React from 'react';
import {Text, Image, Button, View, TouchableOpacity, Share} from 'react-native';
import BeeView from '../components/BeeView';
import {LobbyContainer} from '../components/Lobby';
import {lobby_screen_styles} from '../assets/styles';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Clipboard from '@react-native-clipboard/clipboard';

import {getImgURL} from '../assets/images';

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
  const url = async () => {
    const imageurl = await getImgURL();
    console.log(imageurl);
    return imageurl;
  };
  //TODO: Flatliste Gidecek Olan Component LobbyContainer
  return (
    <BeeView>
      <View style={lobby_screen_styles.mainContainer}>
        <View style={lobby_screen_styles.topContainer}>
          <Image source={{uri: `${url()}`}} style={lobby_screen_styles.logo} />

          {/* <Image
            source={require('../assets/bee.png')}
            style={lobby_screen_styles.logo}
          /> */}
          <Text>{id}</Text>
          <TouchableOpacity onPress={onShare}>
            <Icons name="share-variant" size={30} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => copyToClipboard()}>
            <Icons name="content-copy" size={30} color={'#000'} />
          </TouchableOpacity>
        </View>
        <Button
          title="Click to start stream"
          onPress={() => onNavigate(toScreen)}
        />
      </View>
      <View
        style={
          (lobby_screen_styles.listContainer, {backgroundColor: 'yellow'})
        }>
        <Text>Liste</Text>
        <LobbyContainer />
      </View>
      <View
        style={
          (lobby_screen_styles.buttonsContainer, {backgroundColor: 'orange'})
        }>
        <Text>Buttons</Text>
      </View>
    </BeeView>
  );
}

export {LobbyScreen};
