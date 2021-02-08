import React from 'react';
import {LoginPage, SignUp, HomePage, ProfilePage, Lobby, Room} from './pages';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;
