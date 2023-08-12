/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useNavigation,
  useRoute,
  RouteProp,
  useFocusEffect,
} from '@react-navigation/native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../navigation/AuthNavigation';
import {StackNavigationProp} from '@react-navigation/stack';
import LoginComponent from '../component/Login';
import {GlobalContext} from '../context/Provider';
import loginUser from '../context/action/authAction/Login';
import {clearAuthState} from '../context/action/authAction/Register';
interface change {
  name: string;
  value: string;
}

interface LoginScreenRouteParams {
  data: any; // You can replace 'any' with the appropriate type for your data
}

const Login = () => {
  const [form, setForm] = useState<{[key: string]: string}>({});
  const [error, setError] = useState<{[key: string]: string}>({});
  const [secureText, setSecureText] = useState(false);
  const [justSignedUp, setJustSignedUp] = useState(false);
  const {navigate, setOptions} =
    useNavigation<StackNavigationProp<RootStackParams>>();
  const {params} =
    useRoute<RouteProp<Record<string, LoginScreenRouteParams>, string>>();

  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm(prev => {
        return {...prev, email: params.data.email};
      });
    }
  }, [params]);

  let {
    authDispatch,
    authState: {loading, errors},
  } = useContext(GlobalContext);
  useFocusEffect(
    useCallback(() => {
      if (errors) {
        clearAuthState()(authDispatch);
      }
    }, [errors]),
  );

  const onChangeText = ({name, value}: change) => {
    setForm(prev => {
      return {...prev, [name]: value};
    });

    setJustSignedUp(false);
    if (value !== '') {
      if (name === 'password') {
        if (value.length <= 6) {
          setError(prev => {
            return {...prev, password: 'password must be above 6 characters'};
          });
        } else {
          setError((prev): {} => {
            return {...prev, password: null};
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

  const onSubmit = () => {
    if (!form.email) {
      setError(prev => {
        return {...prev, email: 'Email is required'};
      });
    }
    if (!form.password) {
      setError(prev => {
        return {...prev, password: 'Password is required'};
      });
    }

    if (
      Object.values(form).length === 2 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(error).every(item => !item)
    ) {
      loginUser(form)(authDispatch);
    }
  };
  const TextChange = () => {
    setSecureText(!secureText);
  };

  return (
    <LoginComponent
      form={form}
      error={error}
      onChangeText={onChangeText}
      onPress={onSubmit}
      secureText={secureText}
      TextChange={TextChange}
      loading={loading}
      errors={errors}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
