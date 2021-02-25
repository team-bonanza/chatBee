import React from 'react';
import {Text, StyleSheet, Button, View, TextInput} from 'react-native';

function LobbyScreen({navigation}) {
  const [roomId, setRoomId] = React.useState('');

  function onNavigate(screen) {
    navigation.navigate(screen, {id: roomId});
    console.log(screen);
  }

  return (
    <>
      <Text style={styles.heading}>Select a Room</Text>
      <TextInput
        style={styles.input}
        value={roomId}
        onChangeText={(val) => setRoomId(val)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Join Room" onPress={() => onNavigate('Join')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Create Room" onPress={() => onNavigate('Room')} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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

// function Lobby() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'space-evenly',
//       }}>
//       <View>
//         <Text>Üst Kısım | Logo ile Kodun Kopyalanacağı Kısım Olacak</Text>
//       </View>
//       <View>
//         <Text>Orta Kısım | Kullanıcılar Bu Kısımda Gözükecekler</Text>
//       </View>
//       <View>
//         <Text>
//           Alt Kısım | Kullanıcılar Hazır Olup Olmadıklarını Buradaki Tuşlarla
//           Kontrol Edebilecekler
//         </Text>
//       </View>
//     </View>
//   );
