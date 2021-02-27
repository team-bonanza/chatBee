import React, {useState} from 'react';
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
import ModalPage from '../components/modal/ModalPage';

function HomePage({navigation}) {
  const {loading} = useAuth();

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function signOut() {
    auth()
      .signOut()
      .then(() => navigation.navigate('Login'))
      .then(() => setModalVisible(false));
  }

  if (loading) {
    return <LoadingProvider />;
  }

  return (
    <BeeView>
      <View style={home_page_styles.photoContianer}>
        <View style={home_page_styles.photo} />
      </View>
      <View style={home_page_styles.container}>
        <View style={home_page_styles.inputArea}>
          <Text style={home_page_styles.input}>ODA OLUŞTUR</Text>
          <TouchableOpacity
            style={home_page_styles.iconCopy}
            onPress={() => navigation.navigate('Lobby')}>
            <Icons name="arrow-right" size={30} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <View style={home_page_styles.inputArea}>
          <TextInput
            placeholder="KOD GİRİNİZ"
            placeholderTextColor="#333666"
            style={home_page_styles.input}
          />
          <TouchableOpacity style={home_page_styles.iconCopy}>
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
            <ModalPage
              loading={loading}
              onLogin={() => navigation.navigate('Home Page')}
            />

            <View style={home_page_styles.signOutContainer}>
              <TouchableOpacity
                onPress={signOut}
                style={home_page_styles.signOutIcon}>
                <FontAwesome name="sign-out" size={30} color={'white'} />
                <Text style={home_page_styles.signOutText}>Çıkış Yap</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View />
    </BeeView>
  );
}

export {HomePage};
