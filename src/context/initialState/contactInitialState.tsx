export interface ContactState {
  getContact: {
    data: any;
    error: any;
    loading: boolean;
  };
  createContact: {
    data: any;
    errors: any;
    loading: boolean;
  };
  createImage: {
    image: any;
    imageError: any;
    imageLoading: boolean;
  };
  deleteContact: {
    loading: boolean;
    data: null;
    error: null;
  };
}

const contactInitialState: ContactState = {
  getContact: {
    data: [],
    error: null,
    loading: false,
  },
  createContact: {
    data: {},
    errors: null,
    loading: false,
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

export default contactInitialState;
