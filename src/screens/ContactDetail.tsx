import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import ContactDetailComponent from '../component/ContactDetailComponent';

interface LoginScreenRouteParams {
  item: any; // You can replace 'any' with the appropriate type for your data
}

export const ContactDetail = () => {
  const {params} =
    useRoute<RouteProp<Record<string, LoginScreenRouteParams>, string>>();

  // const item = route.params as IndexProps;
  // console.log(item.firstName);

  return <ContactDetailComponent item={params?.item} />;
};
