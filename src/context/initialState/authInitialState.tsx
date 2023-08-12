export interface AuthState {
  loading: boolean;
  data: {}; // Replace 'any' with the appropriate type for your 'data' property
  errors: any; // Replace 'any' with the appropriate type for your 'error' property
  isLoggedIn: boolean;
}

const authInitialState: AuthState = {
  loading: false,
  data: {},
  errors: null,
  isLoggedIn: false,
};

export default authInitialState;
