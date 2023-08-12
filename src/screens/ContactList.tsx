/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  useNavigation,
  DrawerActions,
  useFocusEffect,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {RootStackParams} from '../navigation/HomeNavigation';
import Icon from '../component/Common/Icon';

import getContact from '../context/action/contactAction/getContact';
import {GlobalContext} from '../context/Provider';

import AsyncStorage from '@react-native-async-storage/async-storage';
import ContactListComponent from '../component/ContactListComponent';

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// const listEmpty = () => {
//   return (
//     <View style={{alignItems: 'center', paddingVertical: 20}}>
//       <Text>No Contacts</Text>
//     </View>
//   );
// };
// const renderSeparator = () => {
//   return (
//     <View
//       style={{
//         borderTopWidth: 0.5,
//         borderBottomWidth: 0.5,
//         borderColor: colors.info,
//       }}
//     />
//   );
// };

export interface Contact {
  _id: string;
  image: string;
  firstName: string;
  lastName: string;
  phone: string;

  // Add other properties if needed
}

export const ContactList = () => {
  const {setOptions, dispatch, navigate} =
    useNavigation<StackNavigationProp<RootStackParams>>();
  const [sortBy, setSortBy] = useState('');

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getSettings();
    }, []),
  );

  const {
    contactDispatch,
    contactState: {
      getContact: {loading, data},
    },
  } = useContext(GlobalContext);
  const contactRef = useRef([]);
  useEffect(() => {
    const prev = contactRef.current;
    contactRef.current = data;
    const newList = contactRef.current;
    if (newList.length - prev.length === 1) {
      const newContact = newList.find(
        (item: Contact) =>
          !prev.map((prevItem: Contact) => prevItem._id).includes(item._id),
      );
      navigate('CONTACT_DETAIL', {item: newContact});
    }
  }, [data.length]);
  useEffect(() => {
    getContact()(contactDispatch);
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            dispatch(DrawerActions.openDrawer);
          }}>
          <Text style={{padding: 10}}>
            <Icon type="AntDesign" size={21} name="menu-unfold" />
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <ContactListComponent loading={loading} sortBy={sortBy} data={data} />
    // <SafeAreaView>
    //   {loading ? (
    //     <ActivityIndicator
    //       color={colors.secondary}
    //       style={{paddingVertical: 10}}
    //     />
    //   ) : (
    //     <>
    //       <FlatList
    //         data={
    //           sortBy
    //             ? data.sort((a, b) => {
    //                 const personA = a as Person;
    //                 const personB = b as Person;
    //                 if (sortBy === 'first Name') {
    //                   if (personB.firstName > personA.firstName) {
    //                     return -1;
    //                   } else {
    //                     return 1;
    //                   }
    //                 }
    //                 if (sortBy === 'last Name') {
    //                   if (personB.lastName > personA.lastName) {
    //                     return -1;
    //                   } else {
    //                     return 1;
    //                   }
    //                 }
    //                 return 0;
    //               })
    //             : data
    //         }
    //         renderItem={({item}: Contact) => <RenderItem item={item} />}
    //         keyExtractor={({_id}) => _id}
    //         ItemSeparatorComponent={renderSeparator}
    //         ListEmptyComponent={listEmpty}
    //         ListFooterComponent={() => <View style={{height: 500}} />}
    //       />
    //     </>
    //   )}
    //   <FloatingButton />
    // </SafeAreaView>
  );
};
