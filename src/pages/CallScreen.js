import React from 'react';
import {Text, StyleSheet, Button, View, TextInput} from 'react-native';

function CallScreen({navigation}) {
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

export {CallScreen};
