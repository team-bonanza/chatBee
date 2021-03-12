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

function OnboardingStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboarding" component={OnboardingScreens} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
}

function Router() {
  const [firstLaunch, setFirstLaunch] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('hasLaunch').then((value) => {
      if (value === 'true') {
        setFirstLaunch(true);
      } else {
        console.log('ilk defa açıldı', value);
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
            name="HomeStack"
            component={HomeStack}
          />
        ) : (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="OnboardingStack"
            component={OnboardingStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
