import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {Login, SignUp, HomePage, ProfilePage, Lobby, Room} from './pages';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {default as theme} from './assets/theme.json';

const {Navigator, Screen} = createStackNavigator();

function Router() {
  return (
    <>
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <NavigationContainer>
          <Navigator headerMode="none">
            <Screen name="Login" component={Login} />
            <Screen name="SignUp" component={SignUp} />
            <Screen name="Home" component={HomePage} />
            <Screen name="Profile" component={ProfilePage} />
            <Screen name="Lobby" component={Lobby} />
            <Screen name="Room" component={Room} />
          </Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
export default Router;
