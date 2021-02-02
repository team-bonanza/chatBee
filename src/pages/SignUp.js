import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  Button,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

// const BackIcon = (props) => <Icon {...props} name="arrow-back" />; //TODO: icon ile alakalı 1. durum

const DetailsScreen = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  // const BackAction = () => (
  //   <TopNavigationAction icon={BackIcon} onPress={navigateBack} /> //TODO: icon ile alakalı 2. durum
  // );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="MyApp"
        alignment="center"
        /*  accessoryLeft={BackAction} */ //TODO: icon ile alakalı 3. durum
      />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">DETAILS</Text>
        <Button onPress={() => navigation.goBack()}>GO BACK</Button>
      </Layout>
    </SafeAreaView>
  );
};
export {DetailsScreen};
