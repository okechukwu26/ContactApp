/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Toast from 'react-native-toast-message';
import GlobalProvider from './src/context/Provider';
import AppNavigation from './src/navigation';

function App(): JSX.Element {
  return (
    <GlobalProvider>
      <AppNavigation />
      <Toast />
    </GlobalProvider>
  );
}

export default App;
