import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Button,
  Divider,
  Layout,
  Text,
  TopNavigation,
} from '@ui-kitten/components';
import {ThemeContext} from '../assets/theme-context';

const Login = ({navigation}) => {
  const themeContext = React.useContext(ThemeContext);

  const navigateDetails = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h4">LOGIN SCREEN</Text>
        <Button onPress={navigateDetails}>SIGN UP</Button>
        <Button style={{marginVertical: 4}} onPress={themeContext.toggleTheme}>
          TOGGLE THEME
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

export {Login};
