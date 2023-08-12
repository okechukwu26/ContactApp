import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT} from '../../../constant/actionType';
import {AuthAction} from '../../Provider';
import {Dispatch} from 'react';

const logoutUser = () => async (dispatch: Dispatch<AuthAction>) => {
  try {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('token');
    dispatch({type: LOGOUT});
  } catch (error) {
    console.log(error);
  }
};

export default logoutUser;
