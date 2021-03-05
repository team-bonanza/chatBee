import React, {useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
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
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Sign Up" component={SignUpPage} />
      <Stack.Screen name="Home Page" component={CallStack} />
    </Stack.Navigator>
  );
}

function Router() {
  const [firstLaunch, setFirstLaunch] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('hasLaunch').then((value) => setFirstLaunch(value));
    console.log('Router', firstLaunch);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={firstLaunch ? 'HomeStack' : 'Onboarding'}>
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="Onboarding" component={OnboardingScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
