import React, {useContext} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
// import {DrawerNavigationProp} from '@react-navigation/drawer/lib/typescript/src/types';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Icon from '../../component/Common/Icon';
import Container from '../../component';
import styles from './styles';
import logoutUser from '../../context/action/authAction/logoutUser';
import {GlobalContext} from '../../context/Provider';

interface SideMenuProps {
  navigation: DrawerNavigationProp<Record<string, object | undefined>, string>;
}

const SideMenu: React.FC<SideMenuProps> = ({navigation}) => {
  const {authDispatch} = useContext(GlobalContext);

  const handleLogOut = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Ok',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };
  const NavItem = [
    {
      name: 'Settings',
      icon: <Icon type="AntDesign" name="setting" size={21} />,
      onPress: () => {
        navigation.navigate('SETTINGS');
      },
    },
    {
      name: 'logout',
      icon: <Icon type="material" name="logout" size={21} />,
      onPress: () => {
        handleLogOut();
      },
    },
  ];
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        width={150}
        height={150}
        style={styles.image}
      />
      <View>
        {NavItem.map(({name, icon, onPress}) => {
          return (
            <View key={name}>
              <TouchableOpacity style={styles.sideMenu} onPress={onPress}>
                {icon}
                <Text style={styles.text}>{name}</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
            </View>
          );
        })}
      </View>
    </Container>
  );
};

export default SideMenu;
