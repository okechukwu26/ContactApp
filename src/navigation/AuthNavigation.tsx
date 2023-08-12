import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';

export type RootStackParams = {
  LOGIN: any;
  REGISTER: any;
};

const AuthNavigation = () => {
  const AuthStack = createStackNavigator<RootStackParams>();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={'LOGIN'} component={Login} />
      <AuthStack.Screen name={'REGISTER'} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
