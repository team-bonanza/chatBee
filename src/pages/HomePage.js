import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import BeeView from '../components/BeeView';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {home_page_styles} from '../assets/styles';
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
      .then(() => navigation.navigate('Login'));
  }

  if (loading) {
    return <LoadingProvider />;
  }

  function onNavigateToRoom(screen) {
    navigation.navigate(screen, {id: uniqueId, toScreen: 'Room'});
  }
  async function onNavigateToJoin(screen) {
    const roomRef = await db.collection('rooms').doc(roomId);
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
        <View style={home_page_styles.displayNameContianer}>
          <Text style={home_page_styles.displayName}>
            {auth().currentUser.displayName}
          </Text>
        </View>
      </View>
      <View style={home_page_styles.container}>
        <View style={home_page_styles.inputArea}>
          <Text style={home_page_styles.input}>{uniqueId}</Text>
          <TouchableOpacity
            style={home_page_styles.iconCopy}
            onPress={() => onNavigateToRoom('Lobby')}>
            <Icons name="arrow-right" size={30} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <View style={home_page_styles.inputArea}>
          <TextInput
            placeholder="KOD GİRİNİZ"
            placeholderTextColor="#333666"
            style={home_page_styles.input}
            value={roomId}
            onChangeText={(val) => setRoomId(val)}
          />
          <TouchableOpacity
            style={home_page_styles.iconCopy}
            onPress={() => onNavigateToJoin('Lobby')}>
            <Icons name="check-circle-outline" size={30} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={home_page_styles.buttons}>
        <View style={home_page_styles.signOutContainer}>
          <TouchableOpacity
            onPress={() => signOut()}
            style={home_page_styles.signOutIcon}>
            <FontAwesome name="sign-out" size={30} color={'white'} />
          </TouchableOpacity>
          <Text style={home_page_styles.signOutText}>Çıkış Yap</Text>
        </View>
      </View>
      <View />
    </BeeView>
  );
}

export {HomePage};
