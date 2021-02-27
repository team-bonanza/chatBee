import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import BeeView from '../components/BeeView';
import {lobby_container_styles} from '../assets/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LobbyContainer from '../components/Lobby/LobbyContainer';

//TODO: En üstteki View BeeView olacak. unutma

function Lobby() {
  return (
    <BeeView>
      <View>
        {/* <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
        }}> */}
        <View style={lobby_container_styles.logoContainer}>
          <Image
            style={lobby_container_styles.logo}
            source={require('../assets/bee.png')}
          />
          <View style={lobby_container_styles.inputCopy}>
            <TextInput
              placeholder="KOPYALA"
              placeholderTextColor="#333666"
              style={lobby_container_styles.input}
            />

            <TouchableOpacity style={lobby_container_styles.iconCopy}>
              <Ionicons name="copy-outline" size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <View>
            <LobbyContainer />
          </View>
        </View>
        <View style={lobby_container_styles.phContainer}>
          <View>
            <View style={lobby_container_styles.buttonOrange}>
              <TouchableOpacity style={lobby_container_styles.iconHour}>
                <Ionicons name="hourglass" size={30} color={'#fff'} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={lobby_container_styles.buttonYellow}>
              <TouchableOpacity style={lobby_container_styles.iconCheck}>
                <Ionicons name="md-checkmark-sharp" size={40} color={'#fff'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* <Text>Üst Kısım | Logo ile Kodun Kopyalanacağı Kısım Olacak</Text>
        </View>
        <View>
        <Text>Orta Kısım | Kullanıcılar Bu Kısımda Gözükecekler</Text>
        </View>
        <View>
        <Text>
        Alt Kısım | Kullanıcılar Hazır Olup Olmadıklarını Buradaki Tuşlarla
        Kontrol Edebilecekler
      </Text> */}
      {/* </View> */}
    </BeeView>
  );
}

export {Lobby};
