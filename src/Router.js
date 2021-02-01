import React from 'react';
import * as eva from '@eva-design/eva';
<<<<<<< HEAD
import {ApplicationProvider} from '@ui-kitten/components';
import {AppNavigator} from './pages/Navigation';

export default () => (
  <>
=======
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppNavigator} from './pages/Home';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
>>>>>>> 7fb7253bfeb60d420e8ac0dcbf9da81de3920d6d
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);
