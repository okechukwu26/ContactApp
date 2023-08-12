import React from 'react';

import {
  ContactList,
  ContactDetail,
  Settings,
  Contact,
  CreateContact,
  Logout,
} from '../screens';

import {createStackNavigator} from '@react-navigation/stack';

export type RootStackParams = {
  CONTACT: any;
  CONTACT_LIST: any;
  SETTINGS: any;
  CONTACT_DETAIL: any;
  CREATE_CONTACT: any;
  LOGOUT: any;
};

export default function HomeNavigation() {
  const Stack = createStackNavigator<RootStackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="CONTACT_LIST" component={ContactList} />
      <Stack.Screen name={'CONTACT'} component={Contact} />
      <Stack.Screen name={'SETTINGS'} component={Settings} />
      <Stack.Screen name={'CONTACT_DETAIL'} component={ContactDetail} />
      <Stack.Screen name={'CREATE_CONTACT'} component={CreateContact} />
      <Stack.Screen name={'LOGOUT'} component={Logout} />
    </Stack.Navigator>
  );
}
