import {
  CLEAR_CONTACT,
  CREATE_CONTACT_FAIL,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  CREATE_IMAGE_FAIL,
  CREATE_IMAGE_LOADING,
  CREATE_IMAGE_SUCCESS,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
  GET_CONTACT_LOADING,
  GET_CONTACT_SUCCESS,
} from '../../../constant/actionType';
import {ContactState} from '../../initialState/contactInitialState';

const contact = (state: ContactState, action: any) => {
  switch (action.type) {
    case EDIT_CONTACT_LOADING:
      return {
        ...state,
        createContact: {
          loading: true,
        },
      };
    case EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        createContact: {
          loading: false,
          errors: null,
        },
        getContact: {
          ...state.getContact,
          loading: false,
          error: null,
          data: state.getContact.data.map((item: {_id: any}) => {
            if (item._id === action.payload._id) {
              return action.payload;
            } else {
              return item;
            }
          }),
        },
      };

    case DELETE_CONTACT_LOADING:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: true,
          data: null,
          error: null,
        },
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: false,
          error: null,
        },
        getContact: {
          ...state.getContact,
          data: state.getContact.data.filter(
            (item: {_id: string}) => item._id !== action.payload,
          ),
        },
      };
    case DELETE_CONTACT_FAIL:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: false,
          error: action.payload,
        },
      };
    case CLEAR_CONTACT:
      return {
        ...state,
        createImage: {
          ...state.createImage,
          imageLoading: false,
          image: null,
          imageError: null,
        },
        createContact: {
          ...state.createContact,
          errors: null,
        },
      };
    case CREATE_CONTACT_LOADING:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: true,
          errors: null,
        },
      };
    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          data: action.payload,
          errors: null,
          loading: false,
        },
        getContact: {
          ...state.getContact,
          data: [...state.getContact.data, action.payload],
        },
      };
    case CREATE_CONTACT_FAIL:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          errors: action.payload,
          loading: false,
        },
      };
    case CREATE_IMAGE_LOADING:
      return {
        ...state,
        createImage: {
          ...state.createImage,
          imageLoading: true,
          image: null,
          imageError: null,
        },
      };
    case CREATE_IMAGE_SUCCESS:
      return {
        ...state,
        createImage: {
          ...state.createImage,
          imageLoading: false,
          image: action.payload,
          imageError: null,
        },
      };
    case CREATE_IMAGE_FAIL:
      return {
        ...state,
        createImage: {
          ...state.createImage,
          imageLoading: false,
          imageError: action.payload,
        },
      };
    case GET_CONTACT_LOADING:
      return {
        ...state,
        getContact: {
          ...state.getContact,
          loading: true,
        },
      };
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        getContact: {
          ...state.getContact,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case GET_CONTACT_FAIL:
      return {
        ...state,
        getContact: {
          ...state.getContact,
          data: [],
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default contact;
