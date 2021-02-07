import React from 'react';
import {CallScreen, RoomScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function CallNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Call" component={CallScreen} />
      <Stack.Screen name="Room" component={RoomScreen} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <CallNavigator />
    </NavigationContainer>
  );
}
export {Router};
