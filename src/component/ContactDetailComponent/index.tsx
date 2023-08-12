/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from '../Common/CustomButton';

import ImageComponent from './ImageComponent';
import {useNavigation} from '@react-navigation/native';
import colors from '../../assets/theme/colors';
import styles from './style';
import Icon from '../Common/Icon';
import {deleteContact} from '../../context/action/contactAction/deleteContact';
import {GlobalContext} from '../../context/Provider';
export interface IndexProps {
  item: {
    _id: string;
    firstName: string;
    lastName: string;
    isFavorite: boolean;
    image: string;
    phone: string;
  };
}

function Index({item}: IndexProps) {
  const {setOptions, navigate} = useNavigation();
  const {
    contactDispatch,
    contactState: {
      deleteContact: {loading},
    },
  } = useContext(GlobalContext);
  console.log(loading);
  useEffect(() => {
    setOptions({
      title: item.firstName + ' ' + item.lastName,
      headerRight: () => {
        return (
          <View style={styles.headerContainer}>
            <TouchableOpacity>
              <Icon
                type="material"
                name={item.isFavorite ? 'star' : 'star-outline'}
                size={29}
                color={colors.info}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Delete!',
                  'Are you sure you want to remove ' + item.firstName,
                  [
                    {
                      text: 'Cancel',
                      onPress: () => {},
                    },
                    {
                      text: 'Ok',
                      onPress: () => {
                        deleteContact(item._id)(contactDispatch)(() => {
                          return navigate('CONTACT_LIST');
                        });
                      },
                    },
                  ],
                );
              }}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Icon
                  type="material"
                  name="delete"
                  size={29}
                  color={colors.info}
                />
              )}
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, [item, loading]);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <ImageComponent src={item.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {item.firstName} {item.lastName}
          </Text>
        </View>
        <View style={styles.firstSection}>
          <View>
            <Icon
              type="ion"
              name="call-outline"
              size={25}
              color={colors.secondary}
            />
            <Text
              style={{paddingTop: 8, fontSize: 17, color: colors.secondary}}>
              Call
            </Text>
          </View>
          <View>
            <Icon
              type="materialCommunity"
              name="message-text"
              size={25}
              color={colors.secondary}
            />
            <Text
              style={{paddingTop: 8, fontSize: 17, color: colors.secondary}}>
              Text
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Icon
              type="fontAwesome5"
              name="video"
              size={25}
              color={colors.secondary}
            />
            <Text
              style={{paddingTop: 8, fontSize: 17, color: colors.secondary}}>
              Video
            </Text>
          </View>
        </View>
        <View style={styles.secondSection}>
          <View style={styles.secondSectionBody1}>
            <Icon type="ion" name="call-outline" size={25} />
            <View style={{paddingLeft: 20}}>
              <Text style={styles.phone}>{item.phone}</Text>
              <Text style={styles.phone}>Mobile</Text>
            </View>
          </View>
          <View style={styles.secondSectionBody1}>
            <Icon
              type="fontAwesome5"
              name="video"
              size={25}
              color={colors.secondary}
            />
            <Icon
              type="materialCommunity"
              name="message-text"
              size={25}
              color={colors.secondary}
              style={{paddingLeft: 20}}
            />
          </View>
        </View>

        <View style={styles.thirdSection}>
          <Icon
            type="AntDesign"
            name="skype"
            color={colors.secondary}
            size={17}
            style={{paddingRight: 17}}
          />
          <Text style={styles.phone}>{`Skype to phone ${item.phone}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View />
          <View style={styles.button}>
            <CustomButton
              title="EDIT CONTACT"
              secondary
              color
              loading={loading}
              onPress={() => {
                navigate('CREATE_CONTACT', {item: item});
              }}
              disabled={loading}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Index;
