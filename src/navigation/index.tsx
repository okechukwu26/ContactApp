import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import AuthNavigation from './AuthNavigation';
import {ActivityIndicator} from 'react-native';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationRef} from './SideMenu/RootNavigation';
function AppNavigation() {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(isLoggedIn);
  const [AuthLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    if (user) {
      setAuthLoaded(true);
      setIsAuthenticated(true);
    } else {
      setAuthLoaded(true);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  return (
    <>
      {AuthLoaded ? (
        <NavigationContainer ref={NavigationRef}>
          {isAuthenticated ? <DrawerNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}

export default AppNavigation;
