import {Dispatch} from 'react';
import {ContactAction} from '../../Provider';
import {
  EDIT_CONTACT_FAIL,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
} from '../../../constant/actionType';
import axiosInstance from '../../../helper/axiosInstance';

const editContact =
  (data: any, id: string) =>
  (dispatch: Dispatch<ContactAction>) =>
  (onSuccess: (text: any) => void) => {
    dispatch({type: EDIT_CONTACT_LOADING});

    axiosInstance
      .put(`/contact/${id}`, data)
      .then(res => {
        dispatch({type: EDIT_CONTACT_SUCCESS, payload: res.data.data});
        onSuccess(res.data.data);
      })
      .catch(err =>
        dispatch({
          type: EDIT_CONTACT_FAIL,
          payload: err.response
            ? err.response.data.message
            : 'Something went wrong',
        }),
      );
  };

export default editContact;
