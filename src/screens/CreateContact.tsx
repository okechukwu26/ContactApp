/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-shadow */
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import CreateContactComponent from '../component/CreateContactComponent';
import {GlobalContext} from '../context/Provider';
import createImage from '../context/action/contactAction/imageContact';
import createContact, {
  clearContact,
} from '../context/action/contactAction/createContact';
import editContact from '../context/action/contactAction/editContact';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/HomeNavigation';
interface change {
  name: string;
  value: string;
}
interface LoginScreenRouteParams {
  item: {
    _id: string;
    firstName: string;
    lastName: string;
    isFavorite: boolean;
    image: any;
    phone: string;
  }; // You can replace 'any' with the appropriate type for your data
}
export const CreateContact = () => {
  const sheetRef = useRef<any>(null);
  const [form, setForm] = useState<{[key: string]: any}>({});
  const [error, setError] = useState<{[key: string]: string}>({});
  const {navigate, setOptions} =
    useNavigation<StackNavigationProp<RootStackParams>>();

  const [stateImage, setStateImage] = useState(null);
  const {params} =
    useRoute<RouteProp<Record<string, LoginScreenRouteParams>, string>>();

  const toggleSwitch = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };
  const {
    contactState: {
      createContact: {loading, errors},
      createImage: {image, imageLoading, imageError},
    },
    contactDispatch,
  } = useContext(GlobalContext);
  useFocusEffect(
    useCallback(() => {
      if (params?.item) {
        setOptions({
          title: 'update contact',
        });
        const {firstName, lastName, isFavorite, phone} = params.item;
        setForm(prev => {
          return {...prev, firstName, lastName, isFavorite, phone};
        });
      }
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      clearContact()(contactDispatch);
    }, []),
  );
  useEffect(() => {
    setStateImage(image);
    setForm((prev): {} => {
      return {...prev, image: image};
    });
  }, [image]);

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };
  const onChangeText = ({name, value}: change) => {
    setForm(prev => {
      return {...prev, [name]: value};
    });
    if (value !== '') {
      if (name === 'phone') {
        if (value.length !== 11) {
          setError(prev => {
            return {...prev, phone: 'phone must be above 11 characters'};
          });
        } else {
          setError((prev): {} => {
            return {...prev, phone: null};
          });
        }
      } else {
        setError((prev): {} => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setError((prev): {} => {
        return {...prev, [name]: 'This must not be empty'};
      });
    }
  };
  console.log('outside', stateImage);
  const onSubmit = () => {
    if (params?.item) {
      console.log('inside', stateImage);
      setForm(prev => {
        return {...prev, image: params.item.image};
      });
      console.log(form);
      if (form.image) {
        if (
          Object.values(form).length >= 4 &&
          Object.values(error).every(item => !item)
        ) {
          editContact(form, params.item._id)(contactDispatch)(data => {
            navigate('CONTACT_DETAIL', {item: data});
          });
        }
      }
    } else {
      if (!form.firstName) {
        setError(prev => {
          return {...prev, firstName: 'first name is required'};
        });
      }
      if (!form.lastName) {
        setError(prev => {
          return {...prev, lastName: 'last name is required'};
        });
      }
      if (!form.phone) {
        setError(prev => {
          return {...prev, phone: 'phone number is required'};
        });
      }
      if (
        Object.values(form).length >= 4 &&
        Object.values(error).every(item => !item)
      ) {
        createContact(form)(contactDispatch)(() => {
          navigate('CONTACT_LIST');
        });
      }
    }
  };
  const onFileSelected = (image: any) => {
    closeSheet();
    createImage(image.assets[0])(contactDispatch);
  };
  return (
    <CreateContactComponent
      closeSheet={closeSheet}
      openSheet={openSheet}
      form={form}
      error={error}
      onChangeText={onChangeText}
      sheetRef={sheetRef}
      onPress={onSubmit}
      loading={loading}
      errors={errors}
      onFileSelected={onFileSelected}
      stateImage={stateImage}
      imageError={imageError}
      imageLoading={imageLoading}
      toggleSwitch={toggleSwitch}
    />
  );
};

export default CreateContact;
