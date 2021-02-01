import React from 'react';
<<<<<<< HEAD
import {SafeAreaView} from 'react-native';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';
=======
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

 export const Login = ({ navigation }) => {
>>>>>>> 7fb7253bfeb60d420e8ac0dcbf9da81de3920d6d

function HomeScreen({navigation}) {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
<<<<<<< HEAD
}

export {HomeScreen};
=======
};
>>>>>>> 7fb7253bfeb60d420e8ac0dcbf9da81de3920d6d
