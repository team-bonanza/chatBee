import React from 'react';
import {
  LoginPage,
  HomePage,
  LobbyScreen,
  SignUpPage,
  JoinScreen,
  RoomScreen,
} from './pages';

import auth from '@react-native-firebase/auth';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const hasSession = auth().currentUser;

function CallStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home Page" component={HomePage} />
      <Stack.Screen name="Lobby" component={LobbyScreen} />
      <Stack.Screen name="Room" component={RoomScreen} />
      <Stack.Screen name="Join" component={JoinScreen} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={hasSession ? 'CallStack' : 'HomeStack'}>
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="CallStack" component={CallStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
