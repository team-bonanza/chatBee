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
import auth from '@react-native-firebase/auth';

function LobbyScreen({navigation, route}) {
  const {id: id, toScreen: toScreen} = route.params;
  const [lobbyUsers, setLobbyUsers] = React.useState([]);

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
      Alert.alert(error.message);
    }
  };

  async function onUserGetReady() {
    const user = db
      .collection('lobby')
      .doc('a9oiOCCYqeb97Ja9OS6D')
      .collection('users')
      .doc(`${auth().currentUser.uid}`);
    await user.update({
      isReady: true,
    });
  }

  const copyToClipboard = () => {
    Clipboard.setString(id);
    Alert.alert('Kopyalandı', 'Bunu kendi kendine kaybolan bi uyarı yapsak?!');
    console.log('Copy to clipboard');
  };

  function onNavigate(screen) {
    navigation.navigate(screen, {id: id});
  }
  // TODO: buraya yarın bakarsın
  async function getUsers() {
    const userList = [];
    const userRef = db
      .collection('lobby')
      .doc('a9oiOCCYqeb97Ja9OS6D')
      .collection('users');

    userRef.onSnapshot((querySnapshot) =>
      querySnapshot.forEach((snapshot) => userList.push(snapshot.data())),
    );
    setLobbyUsers(userList);
  }

  React.useEffect(() => {
    getUsers();
  }, []);

  const renderComponent = ({item}) => {
    return <LobbyContainer user={item} />;
  };

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
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={lobbyUsers}
            renderItem={renderComponent}
          />
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
            onPress={() => onUserGetReady()}>
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
