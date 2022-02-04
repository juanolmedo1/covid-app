import 'react-native-gesture-handler';
import React from 'react';
import { RootNavigator } from './src/navigation';
import { StoreProvider } from './src/store';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

const App = (): JSX.Element => {
  return (
    <StoreProvider>
      <RootNavigator />
    </StoreProvider>
  );
};

export default App;
