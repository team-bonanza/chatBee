import React from 'react';
import {
  LoginPage,
  HomePage,
  ProfilePage,
  Lobby,
  Room,
  SignUpPage,
} from './pages';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
const hasSession = auth().currentUser;

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={hasSession ? 'Home Page' : 'Login'}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Sign Up" component={SignUpPage} />
        <Stack.Screen name="Home Page" component={HomePage} />
        <Stack.Screen name="Lobby" component={Lobby} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;
