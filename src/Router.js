import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {HomeScreen} from './pages/Login';
import {DetailsScreen} from './pages/SignUp';
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
            <Screen name="Home" component={HomeScreen} />
            <Screen name="Details" component={DetailsScreen} />
          </Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
export default Router;
