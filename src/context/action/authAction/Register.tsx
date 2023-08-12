import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constant/actionType';
import axiosInstance from '../../../helper/axiosInstance';
import {AuthAction} from '../../Provider';
import {Dispatch} from 'react';

export const clearAuthState = () => (dispatch: Dispatch<AuthAction>) => {
  dispatch({type: CLEAR_AUTH_STATE});
};

export const RegisterUser =
  (data: any) =>
  (dispatch: Dispatch<AuthAction>) =>
  async (onSuccess: (arg0: {}) => void) => {
    dispatch({type: REGISTER_LOADING});

    axiosInstance
      .post('/auth/signup', data)
      .then(res => {
        dispatch({type: REGISTER_SUCCESS, payload: res.data.data});
        onSuccess(res.data.data);
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data.message
            : 'Something went wrong please try again',
        });
      });
  };
