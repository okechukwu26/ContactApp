import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigation from './HomeNavigation';
import SideMenu from './SideMenu';
import {DrawerNavigationProp} from '@react-navigation/drawer/lib/typescript/src/types';

const getDrawerContent = (
  navigation: DrawerNavigationProp<Record<string, object | undefined>, string>,
) => {
  return <SideMenu navigation={navigation} />;
};
const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={({navigation}) => getDrawerContent(navigation)}>
      <Drawer.Screen name={'Home'} component={HomeNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
