/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Container from '../component';
import {useNavigation} from '@react-navigation/native';
import {SETTINGS} from '../constant/RoutName';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/HomeNavigation';
import Icon from '../component/Common/Icon';
type ContactScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'CONTACT' // Adjust this to match the name of your screen
>;

interface ContactProps {
  navigate: ContactScreenNavigationProp;
}

export const Contact = () => {
  const {navigate} = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigate('SETTINGS');
        }}>
        <Text>hello world</Text>
      </TouchableOpacity>
    </Container>
  );
};
