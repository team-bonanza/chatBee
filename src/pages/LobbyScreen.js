import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  Share,
  Alert,
  FlatList,
} from 'react-native';

import {db} from '../utilities/firebase';

import BeeView from '../components/BeeView';
import {LobbyContainer} from '../components/Lobby';
import {lobby_screen_styles} from '../assets/styles';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-clipboard/clipboard';

import {getImgURL} from '../assets/images';

function LobbyScreen({navigation, route}) {
  const {id: id, toScreen: toScreen} = route.params;

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
    Alert.alert('Kopyalandı', 'Bunu kendi kendine kaybolan bi uyarı yapsak?!');
    console.log('Copy to clipboard');
  };

  function onNavigate(screen) {
    navigation.navigate(screen, {id: id});
  }

  async function getUsers() {
    const roomRef = await db
      .collection('lobby')
      .doc('a9oiOCCYqeb97Ja9OS6D')
      .get();
    //roomRef.collection();
    console.log('ANAN ANAN HATTA ANNEN ' + roomRef.data().user.displayName);
  }

  React.useEffect(() => {
    getUsers();
  }, []);

  // const renderComponent = ({data}) => {
  //   return (
  //     <LobbyContainer name={roomRef.data().user.displayName} data={data} />
  //   );
  // };

  //TODO: LobbyContainer is the container that is going to added to FlatList

  return (
    <BeeView>
      <View style={lobby_screen_styles.mainContainer}>
        <View style={lobby_screen_styles.topContainer}>
          {/* <Image source={logo._W} style={lobby_screen_styles.logo} /> */}

          {/* <Image
            source={require('../assets/bee.png')}
            style={lobby_screen_styles.logo}
          /> */}

          <View style={lobby_screen_styles.inviteContainer}>
            <TouchableOpacity
              style={lobby_screen_styles.shareIcon}
              onPress={onShare}>
              <Icons
                style={lobby_screen_styles.icon}
                name="share-variant"
                size={25}
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
                size={25}
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
        <View style={lobby_screen_styles.roomTitleContainer}>
          <Image
            source={require('../assets/bee.png')}
            style={lobby_screen_styles.logo}
          />
          <Text style={lobby_screen_styles.roomTitle}>Your Room</Text>
        </View>
        <View style={lobby_screen_styles.lobbyContainer}>
          {/* <LobbyContainer
            // photo={source={{uri: getUsers().photoURL}}}
            name={getUsers().displayName}
          />
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={getUsers}
            renderItem={renderComponent}
          /> */}
        </View>
      </View>
      <View style={lobby_screen_styles.buttonsMainContainer}>
        <View style={lobby_screen_styles.buttonsContainer}>
          <TouchableOpacity
            style={lobby_screen_styles.hourglassContainer}
            onPress={() =>
              Alert.alert(
                'HOLD ON',
                "User's Card Border Color will be yellow when clicking the button",
              )
            }>
            <MaterialIcons
              style={lobby_screen_styles.hourglassIcon}
              name="hourglass-full"
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={lobby_screen_styles.checkContainer}
            onPress={() =>
              Alert.alert(
                'READY',
                "User's Card Border Color will be green when clicking the button",
              )
            }>
            <Icons
              style={lobby_screen_styles.checkIcon}
              name="check-bold"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    </BeeView>
  );
}

//TODO: buttons must be affecting the border colors

export {LobbyScreen};
