import {
  GET_CONTACT_FAIL,
  GET_CONTACT_LOADING,
  GET_CONTACT_SUCCESS,
} from '../../../constant/actionType';
import axiosInstance from '../../../helper/axiosInstance';
import {ContactAction} from '../../Provider';
import {Dispatch} from 'react';

const getContact = () => (dispatch: Dispatch<ContactAction>) => {
  dispatch({type: GET_CONTACT_LOADING});
  axiosInstance
    .get('/contact')
    .then(res => {
      dispatch({type: GET_CONTACT_SUCCESS, payload: res.data.data});
    })
    .catch(err => {
      dispatch({
        type: GET_CONTACT_FAIL,
        payload: err.response
          ? err.response.data.message
          : 'Something went wrong please try again',
      });
    });
};

export default getContact;
