/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {ReactNode, createContext, useReducer} from 'react';
import contactInitialState, {
  ContactState,
} from './initialState/contactInitialState';
import authInitialState, {AuthState} from './initialState/authInitialState';
import auth from './reducer/authReducer';
import contact from './reducer/contactReducer';
import {any, string} from 'prop-types';

interface GlobalProviderProps {
  children: ReactNode;
}
const initialContactState = {
  getContact: {
    data: [],
    loading: false,
    error: null,
  },
  createContact: {
    data: {},
    loading: false,
    errors: null,
  },
  deleteContact: {
    loading: false,
    data: null,
    error: null,
  },
  createImage: {
    image: null,
    imageLoading: false,
    imageError: null,
  },
};
const initialState = {
  loading: false,
  errors: '',
  data: {},
  isLoggedIn: false,
  // ...other properties
};
export type AuthAction =
  | {type: 'REGISTER_SUCCESS'; payload: any}
  | {type: 'LOGIN_SUCCESS'; payload: any}
  | {type: 'LOGIN_LOADING'}
  | {type: 'LOGIN_FAIL'; payload: any}
  | {type: 'REGISTER_FAIL'; payload: any}
  | {type: 'REGISTER_LOADING'}
  | {type: 'CLEAR_AUTH_STATE'}
  | {type: 'LOGOUT'}
  | {type: 'LOGOUT_FAIL'};

export type ContactAction =
  | {type: 'GET_CONTACT_SUCCESS'; payload: any}
  | {type: 'GET_CONTACT_FAIL'; payload: any}
  | {type: 'GET_CONTACT_LOADING'}
  | {type: 'CREATE_CONTACT_SUCCESS'; payload: any}
  | {type: 'CREATE_CONTACT_FAIL'; payload: any}
  | {type: 'CREATE_CONTACT_LOADING'}
  | {type: 'CREATE_IMAGE_SUCCESS'; payload: any}
  | {type: 'CREATE_IMAGE_LOADING'}
  | {type: 'CREATE_IMAGE_FAIL'; payload: any}
  | {type: 'CLEAR_CONTACT'}
  | {type: 'DELETE_CONTACT_LOADING'}
  | {type: 'DELETE_CONTACT_SUCCESS'; payload: any}
  | {type: 'DELETE_CONTACT_FAIL'; payload: any}
  | {type: 'EDIT_CONTACT_SUCCESS'; payload: any}
  | {type: 'EDIT_CONTACT_FAIL'; payload: any}
  | {type: 'EDIT_CONTACT_LOADING'};

export const GlobalContext = createContext<{
  authState: typeof initialState;
  authDispatch: React.Dispatch<AuthAction>;
  contactState: typeof initialContactState;
  contactDispatch: React.Dispatch<ContactAction>;
}>({
  authState: initialState,
  authDispatch: () => null,
  contactState: initialContactState,
  contactDispatch: () => null,
});
const GlobalProvider = ({children}: GlobalProviderProps) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactState, contactDispatch] = useReducer(
    contact,
    contactInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        contactState,
        contactDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
