import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

<<<<<<< HEAD
const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
=======
const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

 export const SignUp = ({ navigation }) => {
>>>>>>> 7fb7253bfeb60d420e8ac0dcbf9da81de3920d6d

function DetailsScreen({navigation}) {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="MyApp"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
<<<<<<< HEAD
}

export {DetailsScreen};
=======
};
>>>>>>> 7fb7253bfeb60d420e8ac0dcbf9da81de3920d6d
