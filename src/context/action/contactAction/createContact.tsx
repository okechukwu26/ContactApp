import {Dispatch} from 'react';
import {ContactAction} from '../../Provider';
import {
  CLEAR_CONTACT,
  CREATE_CONTACT_FAIL,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from '../../../constant/actionType';
import axiosInstance from '../../../helper/axiosInstance';

export const clearContact = () => (dispatch: Dispatch<ContactAction>) => {
  dispatch({type: CLEAR_CONTACT});
};
const createContact =
  (data: any) =>
  (dispatch: Dispatch<ContactAction>) =>
  (onSuccess: () => void) => {
    dispatch({type: CREATE_CONTACT_LOADING});

    axiosInstance
      .post('/contact/create', data)
      .then(res => {
        dispatch({type: CREATE_CONTACT_SUCCESS, payload: res.data.data});
        onSuccess();
      })
      .catch(err => {
        dispatch({
          type: CREATE_CONTACT_FAIL,
          payload: err.response
            ? err.response.data.message
            : 'Something went wrong try again',
        });
      });
  };

export default createContact;
