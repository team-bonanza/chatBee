import React from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Share,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Clipboard from '@react-native-clipboard/clipboard';

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

  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <TouchableOpacity onPress={onShare}>
        <Icons name="share-variant" size={30} color={'#000'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => copyToClipboard()}>
        <Icons name="content-copy" size={30} color={'#000'} />
      </TouchableOpacity>
      <View>{console.log(id)}</View>
      <Button
        title="Click to start stream"
        onPress={() => onNavigate(toScreen)}
      />
      <View>
        <Text>Üst Kısım | Logo ile Kodun Kopyalanacağı Kısım Olacak</Text>
      </View>
      <View>
        <Text>Orta Kısım | Kullanıcılar Bu Kısımda Gözükecekler</Text>
      </View>
      <View>
        <Text>
          Alt Kısım | Kullanıcılar Hazır Olup Olmadıklarını Buradaki Tuşlarla
          Kontrol Edebilecekler
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  heading: {
    marginVertical: 10,
    alignSelf: 'center',
    fontSize: 30,
  },
  input: {
    margin: 20,
    height: 40,
    backgroundColor: '#aaa',
  },
  buttonContainer: {
    margin: 5,
  },
});

export {LobbyScreen};
