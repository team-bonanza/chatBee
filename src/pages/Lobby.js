import React from 'react';
import {View, Text} from 'react-native';
import BeeView from '../components/BeeView';

//TODO: En üstteki View BeeView olacak. unutma

function Lobby() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-evenly',
      }}>
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

export {Lobby};
