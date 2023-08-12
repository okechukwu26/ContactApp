/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {clearContact} from '../../../context/action/contactAction/createContact';
import {GlobalContext} from '../../../context/Provider';

interface Message {
  message: string;
  danger?: Boolean;
}

const ShowToast = ({message, danger}: Message) => {
  const {contactDispatch} = useContext(GlobalContext);
  useEffect(() => {
    Toast.show({
      type: danger ? 'error' : 'success',
      text1: message,
    });
    return () => {
      clearContact()(contactDispatch);
    };
  }, []);

  return null;
};

const Index = ({danger, message}: Message) => {
  return <>{message && <ShowToast message={message} danger={danger} />}</>;
};

export default Index;
