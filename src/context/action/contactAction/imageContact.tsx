import {
  CREATE_IMAGE_FAIL,
  CREATE_IMAGE_LOADING,
  CREATE_IMAGE_SUCCESS,
} from '../../../constant/actionType';
import axiosInstance from '../../../helper/axiosInstance';
import {ContactAction} from '../../Provider';
import {Dispatch} from 'react';
const createImage = (data: any) => (dispatch: Dispatch<ContactAction>) => {
  dispatch({type: CREATE_IMAGE_LOADING});
  const formData = new FormData();

  formData.append('image', {
    uri: data.uri,
    type: data.type,
    name: data.fileName,
  });

  axiosInstance
    .post('/media/upload', formData, {
      headers: {
        Accept: 'application/json',
        'content-type': 'multipart/form-data',
      },
    })
    .then(res => {
      dispatch({type: CREATE_IMAGE_SUCCESS, payload: res.data.data});
    })
    .catch(err => {
      dispatch({
        type: CREATE_IMAGE_FAIL,
        payload: err.response
          ? err.response.data.message
          : 'Something went wrong please try again',
      });
    });
};

export default createImage;
