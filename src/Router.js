import React, {useState, useEffect} from 'react';
import {
  LoginPage,
  HomePage,
  LobbyScreen,
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
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreens} />
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
}

function Router() {
  const [firstLaunch, setFirstLaunch] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('hasLaunch').then((value) => {
      if (value == 'true') {
        setFirstLaunch(true);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {firstLaunch ? (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={HomeStack}
          />
        ) : (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Call"
            component={CallStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
