import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {Login, SignUp, HomePage, ProfilePage, Lobby, Room} from './pages';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeContext} from './assets/theme-context';

import {default as theme} from './assets/theme.json';
import {default as mapping} from './assets/mapping.json';

const {Navigator, Screen} = createStackNavigator();

function Router() {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider
          {...eva}
          theme={eva[theme]}
          customMapping={mapping}>
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
      </ThemeContext.Provider>
    </>
  );
}
export default Router;
