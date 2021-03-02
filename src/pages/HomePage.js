import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import BeeView from '../components/BeeView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {home_page_styles} from '../assets/styles';
import auth from '@react-native-firebase/auth';
import useAuth from '../hooks/useAuth';
import {LoadingProvider} from '../components/Loading/LoadingProvider';
import Modal from 'react-native-modal';
import UUIID from 'uuid-random';
import {db} from '../utilities/firebase';

function HomePage({navigation}) {
  const [uniqueId, setUniqueId] = React.useState('');
  const [roomId, setRoomId] = React.useState('');
  const {loading} = useAuth();
  const [isModalVisible, setModalVisible] = useState(false);

  React.useEffect(() => {
    createUniqueId();
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
      <View style={home_page_styles.photoContianer}>
        <View style={home_page_styles.photo}></View>
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
        <TouchableOpacity style={home_page_styles.settingsIcon}>
          <Ionicons
            name="settings"
            size={30}
            color={'#FFA643'}
            onPress={toggleModal}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Modal isVisible={isModalVisible}>
          <View style={home_page_styles.closingContainer}>
            <TouchableOpacity
              onPress={toggleModal}
              style={home_page_styles.closingIcon}>
              <Entypo name="circle-with-cross" size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 3}}>
            {/* <ModalPage
              loading={loading}
              onLogin={() => navigation.navigate('Home Page')}
            /> */}

            <View style={home_page_styles.signOutContainer}>
              <TouchableOpacity
                onPress={() => signOut()}
                style={home_page_styles.signOutIcon}>
                <FontAwesome name="sign-out" size={30} color={'white'} />
              </TouchableOpacity>
              <Text style={home_page_styles.signOutText}>Çıkış Yap</Text>
            </View>
          </View>
        </Modal>
      </View>
      <View></View>
    </BeeView>
  );
}

export {HomePage};
