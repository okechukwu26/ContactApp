/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from '../../component/Common/Icon';
import {Contact} from '../../screens/ContactList';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/HomeNavigation';

const RenderItem: React.FC<Contact> = ({item}) => {
  const {navigate} = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('CONTACT_DETAIL', {item});
      }}>
      <View style={styles.renderContainer}>
        <View style={styles.renderSection}>
          <Image source={{uri: item.image}} style={styles.logoImage} />
          <View style={{paddingLeft: 10}}>
            <Text style={{fontSize: 21}}>
              {item.firstName} {item.lastName}
            </Text>

            <Text style={{opacity: 0.5, fontSize: 17}}>{item.phone}</Text>
          </View>
        </View>
        <Icon type="AntDesign" name="right" size={17} />
      </View>
    </TouchableOpacity>
  );
};

export default RenderItem;
