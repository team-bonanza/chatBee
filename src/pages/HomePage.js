import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import BeeView from '../components/BeeView';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {home_page_styles, INPUTTEXT, ICONCOLOR} from '../assets/styles';
import auth from '@react-native-firebase/auth';
import useAuth from '../hooks/useAuth';
import {LoadingProvider} from '../components/Loading/LoadingProvider';
import UUIID from 'uuid-random';
import {db} from '../utilities/firebase';

function HomePage({navigation}) {
  const [uniqueId, setUniqueId] = React.useState('');
  const [roomId, setRoomId] = React.useState('');
  const {loading} = useAuth();

  React.useEffect(() => {
    createUniqueId();
  }, []);

  function signOut() {
    auth()
      .signOut()
      .then(() => navigation.navigate('HomeStack'));
  }

  if (loading) {
    return <LoadingProvider />;
  }

  function onNavigateToRoom(screen) {
    db.collection('lobby')
      .doc(uniqueId)
      .collection('users')
      .doc(`${auth().currentUser.uid}`)
      .set(
        {
          displayName: auth().currentUser.displayName,
          isReady: false,
          photoURL: auth().currentUser.photoURL,
        },
        {merge: true},
      );
    navigation.navigate(screen, {id: uniqueId, toScreen: 'Room'});
  }
  async function onNavigateToJoin(screen) {
    const roomRef = db.collection('rooms').doc(roomId);
    const roomSnapshot = await roomRef.get();
    console.log('roomref', roomRef);
    console.log('roomsp', roomSnapshot);

    if (!roomSnapshot.exists) {
      console.log('oda yok');
    }

    navigation.navigate(screen, {
      id: roomId,
      toScreen: 'Join',
      roomRef: roomRef,
      roomSnapshot: roomSnapshot,
    });
  }

  function createUniqueId() {
    const uid = UUIID();
    setUniqueId(uid);

    return uniqueId;
  }

  return (
    <BeeView>
      <View style={home_page_styles.photoMainContianer}>
        <View style={home_page_styles.photoContianer}>
          <Image
            source={{uri: auth().currentUser.photoURL}}
            style={home_page_styles.photo}
          />
        </View>
        <View style={home_page_styles.displayNameContainer}>
          <Text style={home_page_styles.displayName}>
            {auth().currentUser.displayName}
          </Text>
        </View>
      </View>
      <View style={home_page_styles.container}>
        <Text style={home_page_styles.createRoom}>ODA OLUŞTUR</Text>
        <View style={home_page_styles.inputArea}>
          <Text style={home_page_styles.input} numberOfLines={1}>
            {uniqueId}
          </Text>
          <TouchableOpacity
            style={home_page_styles.goToRoom}
            onPress={() => onNavigateToRoom('Lobby')}>
            <Icons name="arrow-right" size={30} color={ICONCOLOR} />
          </TouchableOpacity>
        </View>
        <View style={home_page_styles.inputArea}>
          <TextInput
            placeholder="KOD GİRİNİZ"
            placeholderTextColor={INPUTTEXT}
            style={home_page_styles.input}
            value={roomId}
            onChangeText={(val) => setRoomId(val)}
          />
          <TouchableOpacity
            style={home_page_styles.goToRoom}
            onPress={() => onNavigateToJoin('Lobby')}>
            <Icons name="check-circle-outline" size={30} color={ICONCOLOR} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={home_page_styles.buttonContainer}>
        <View style={home_page_styles.button}>
          <View style={home_page_styles.signOutContainer}>
            <TouchableOpacity
              onPress={() => signOut()}
              style={home_page_styles.signOut}>
              <FontAwesome name="sign-out" size={30} color={'#e00000'} />
              <Text style={home_page_styles.signOutText}>Çıkış Yap</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View />
      </View>
    </BeeView>
  );
}

export {HomePage};
