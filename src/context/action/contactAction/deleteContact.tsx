import {Dispatch} from 'react';
import {ContactAction} from '../../Provider';
import {
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
} from '../../../constant/actionType';
import axiosInstance from '../../../helper/axiosInstance';

export const deleteContact =
  (id: string) =>
  (dispatch: Dispatch<ContactAction>) =>
  (onSuccess: () => void) => {
    dispatch({type: DELETE_CONTACT_LOADING});
    axiosInstance
      .delete(`/contact/${id}`)
      .then(() => {
        dispatch({type: DELETE_CONTACT_SUCCESS, payload: id});
        onSuccess();
      })
      .catch(err =>
        dispatch({
          type: DELETE_CONTACT_FAIL,
          payload: err.response ? err.response.data : 'Something went wrong',
        }),
      );
  };
