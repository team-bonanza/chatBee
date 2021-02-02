import React from 'react';
import {Alert, SafeAreaView} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  Button,
  TopNavigation,
  TopNavigationAction,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


 const BackIcon = (props) => <Icon {...props} name="arrow-back" />; //TODO: icon ile alakalı 1. durum

const DetailsScreen = ({navigation}) => {
  const navigateBack = () => {
    Alert.alert('AFERİN', 'KAYIT OLDUNUZ');
    navigation.goBack();
  };

  const BackAction = () => (
     <TopNavigationAction icon={BackIcon} onPress={navigateBack} /> //TODO: icon ile alakalı 2. durum
   );

  return (
    <SafeAreaView style={{flex: 1}}>
    <IconRegistry icons={EvaIconsPack} />
      <TopNavigation
      title="MyApp"
        alignment="center"
         accessoryLeft={BackAction}  //TODO: icon ile alakalı 3. durum -Zaten TOPNAVIGATION kullanılmayacak ama neden oluyor?
      />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h4">SIGNUP SCREEN</Text>
        <Button onPress={navigateBack}>LOGIN PAGE</Button>
      </Layout>
    </SafeAreaView>
  );
};
export {DetailsScreen};
