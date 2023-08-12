import {ParamListBase} from '@react-navigation/native';

type RootParamList = {
  Home: undefined; // No parameters needed for the "Home" screen
  Profile: {userId: string}; // "Profile" screen with a userId parameter
  Settings: undefined;
  LOGIN: string;

  // ... add more screen definitions here
};

export type RootStackParamList = ParamListBase & RootParamList;
export default RootParamList;
