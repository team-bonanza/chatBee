import React from 'react';
import {Text, StyleSheet, Button, View, TextInput, Alert} from 'react-native';

function RoomScreen({navigation}) {
  const [roomId, setRoomId] = React.useState('');

  const onCallOrJoin = (screen) => {
    if (roomId.length > 0) {
      navigation.navigate(screen, {id: roomId});
    } else {
      Alert.alert('Gireceğiniz oda numarasını giriniz.');
    }
  };

  return (
    <>
      <Text style={styles.heading}>Select a Room</Text>
      <TextInput
        style={styles.input}
        value={roomId}
        onChangeText={(val) => setRoomId(val)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Join Screen" onPress={onCallOrJoin('Join')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Call Screen" onPress={() => onCallOrJoin('Call')} />
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

export {RoomScreen};
