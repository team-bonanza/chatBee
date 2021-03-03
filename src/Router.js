import React from 'react';
import {
  LoginPage,
  HomePage,
  LobbyScreen,
  SignUpPage,
  JoinScreen,
  RoomScreen,
  OnboardingScreens,
} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

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
<Stack.Screen name="onboaring" component={OnboardingScreens} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Sign Up" component={SignUpPage} />
      <Stack.Screen name="Home Page" component={CallStack} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Stack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
