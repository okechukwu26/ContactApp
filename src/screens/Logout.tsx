/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {GlobalContext} from '../context/Provider';
import logoutUser from '../context/action/authAction/logoutUser';

export const Logout = () => {
  const {authDispatch} = useContext(GlobalContext);
  useEffect(() => {
    logoutUser()(authDispatch);
  }, []);
  return (
    <SafeAreaView style={{padding: 30}}>
      <ActivityIndicator />
    </SafeAreaView>
  );
};
