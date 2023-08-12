import {
  CLEAR_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constant/actionType';
import {AuthState} from '../../initialState/authInitialState';

const auth = (state: AuthState, action: any) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        isLoggedIn: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        data: {},
        errors: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        data: {},
        isLoggedIn: false,
        error: null,
      };
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        data: {},
        errors: '',
      };
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errors: '',
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        data: {},
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
