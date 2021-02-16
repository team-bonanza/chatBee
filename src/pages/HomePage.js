import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button,StyleSheet} from 'react-native';
import BeeView from '../components/BeeView';
import BeeInput from '../components/BeeInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {copy_icon_styles} from '../assets/styles';
import auth from '@react-native-firebase/auth';
import useAuth from '../hooks/useAuth';
import {LoadingProvider} from '../components/Loading/LoadingProvider';
import Modal from 'react-native-modal';
import SignUpContainer from '../components/SignUpPages/SignUpContainer';
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
      <View  style={styles.daire}>

      </View>
      <View style={copy_icon_styles.container}>
        <Text style={copy_icon_styles.input}>ODA OLUŞTUR</Text>
        <TouchableOpacity style={copy_icon_styles.iconCopy}>
          <Ionicons name="copy-outline" size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <View style={copy_icon_styles.container}>
        <TextInput
          placeholder="KOD GİRİNİZ"
          placeholderTextColor="#333666"
          style={copy_icon_styles.input}
        />
        <TouchableOpacity style={copy_icon_styles.iconCopy}>
          <Ionicons name="ios-checkbox" size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => signOut()}
          style={copy_icon_styles.iconOut}>
          <FontAwesome name="sign-out" size={30} color={'#00509D'} />
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
              style={copy_icon_styles.modalIconOut}>
              <Entypo name="circle-with-cross" size={50} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <View>
      <Ionicons
        name="settings"
        size={30}
        onPress={toggleModal}
        style={copy_icon_styles.settingsIcon}
      />
      </View>
    </BeeView>
  );
}
const styles=StyleSheet.create({
  daire:{
    height:150,
    width:150,
    borderRadius:150,
    backgroundColor:'red'
  }

})

export {HomePage};
