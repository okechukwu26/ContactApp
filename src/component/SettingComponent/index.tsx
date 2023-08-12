/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '..';
import styles from './style';
import colors from '../../assets/theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppModal from '../Common/AppModal';
import Icon from '../Common/Icon';
interface setting {
  modalVisible: boolean;
  setModalVisible: (text: boolean) => void;
}

const Index = ({setModalVisible, modalVisible}: setting) => {
  const [email, setEmail] = useState(null);
  const [sortBy, setSortBy] = useState('');
  const getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    setEmail(JSON.parse(user).email);
  };
  const getSelected = async () => {
    const sort = await AsyncStorage.getItem('sortBy');
    if (sort) {
      setSortBy(sort);
    }
  };
  useEffect(() => {
    getUser();
    getSelected();
  }, []);
  const options = [
    {
      title: 'My info',
      subTitle: 'setup your profile',
      onPress: () => {},
    },
    {
      title: 'Account',

      onPress: () => {},
    },
    {
      title: 'Default account for new account',
      subTitle: email,
      onPress: () => {},
    },
    {
      title: 'Contact to display',
      subTitle: 'All contact',
      onPress: () => {},
    },
    {
      title: 'sortBy',
      subTitle: sortBy,
      onPress: () => {
        setModalVisible(true);
      },
    },
    {
      title: 'Name format',
      subTitle: 'first name first',
      onPress: () => {},
    },
    {
      title: 'Import',

      onPress: () => {},
    },
    {
      title: 'Export',

      onPress: () => {},
    },
    {
      title: 'Blocked numbers',

      onPress: () => {},
    },
    {
      title: 'About Contact',

      onPress: () => {},
    },
  ];
  const data = [
    {
      icon: <Icon type="AntDesign" name="check" size={17} />,
      title: 'first Name',
      selected: sortBy === 'first Name' ? true : false,
      onPress: () => {
        setSortBy('first Name');
        AsyncStorage.setItem('sortBy', 'first Name');
        setModalVisible(false);
      },
    },
    {
      icon: <Icon type="AntDesign" name="check" size={17} />,
      title: 'last Name',
      selected: sortBy === 'last Name' ? true : false,
      onPress: () => {
        setSortBy('last Name');
        AsyncStorage.setItem('sortBy', 'last Name');
        setModalVisible(false);
      },
    },
  ];
  return (
    <Container>
      <View>
        {options.map(({title, subTitle, onPress}) => {
          return (
            <Fragment key={title}>
              <TouchableOpacity
                style={styles.settingContainer}
                onPress={onPress}>
                <Text style={{fontSize: 17}}>{title}</Text>
                {subTitle && <Text style={{opacity: 0.5}}>{subTitle}</Text>}
              </TouchableOpacity>
              <View
                style={{
                  borderTopWidth: 0.5,
                  borderBottomWidth: 0.5,
                  borderColor: colors.info,
                }}
              />
            </Fragment>
          );
        })}
      </View>
      <AppModal
        title="Name format"
        modalFooter={<></>}
        modalBody={
          <View style={styles.wrapper}>
            {data.map(({icon, title, onPress, selected}) => {
              return (
                <View key={title}>
                  <TouchableOpacity
                    style={styles.sectionBody}
                    onPress={onPress}>
                    {selected && icon}
                    <Text
                      style={[styles.title, {paddingLeft: selected ? 10 : 27}]}>
                      {title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        }
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Container>
  );
};

export default Index;
