import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import BeeView from '../components/BeeView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
      .then(() => navigation.navigate('Login'));
  }

  if (loading) {
    return <LoadingProvider />;
  }

  return (
    <BeeView>
      <View style={home_page_styles.photoContianer}>
        <View style={home_page_styles.photo}></View>
      </View>
      <View style={home_page_styles.container}>
        <View style={home_page_styles.inputArea}>
          <Text style={home_page_styles.input}>ODA OLUŞTUR</Text>
          <TouchableOpacity style={home_page_styles.iconCopy}>
            <Ionicons name="copy-outline" size={30} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <View style={home_page_styles.inputArea}>
          <TextInput
            placeholder="KOD GİRİNİZ"
            placeholderTextColor="#333666"
            style={home_page_styles.input}
          />
          <TouchableOpacity style={home_page_styles.iconCopy}>
            <Ionicons name="ios-checkbox" size={30} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={home_page_styles.buttons}>
        <TouchableOpacity
          onPress={() => signOut()}
          style={home_page_styles.iconOut}>
          <FontAwesome name="sign-out" size={30} color={'#00509D'} />
        </TouchableOpacity>
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
          <View>
            <ModalPage
              loading={loading}
              onLogin={() => navigation.navigate('Home Page')}
            />
            <TouchableOpacity
              onPress={toggleModal}
              style={home_page_styles.modalIconOut}>
              <Entypo name="circle-with-cross" size={50} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <View></View>
    </BeeView>
  );
}

export {HomePage};
