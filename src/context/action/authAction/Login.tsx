import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constant/actionType';
import axiosInstance from '../../../helper/axiosInstance';
import {AuthAction} from '../../Provider';
import {Dispatch} from 'react';

const loginUser = (data: any) => (dispatch: Dispatch<AuthAction>) => {
  dispatch({type: LOGIN_LOADING});

  axiosInstance
    .post('/auth/signin', data)
    .then(res => {
      AsyncStorage.setItem('token', res.data.data.token);
      AsyncStorage.setItem('user', JSON.stringify(res.data.data.email));
      dispatch({type: LOGIN_SUCCESS, payload: res.data.data});
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response
          ? err.response.data.message
          : 'Something went wrong try again.',
      });
    });
};

export default loginUser;
