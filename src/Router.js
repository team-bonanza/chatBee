import React from 'react';
import {Login, SignUp, HomePage, ProfilePage, Lobby, Room} from './pages';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Screen = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Screen.Stack name="Login" component={Main} />
    </NavigationContainer>
  );
}
export default Router;
