/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useState, useCallback} from 'react';
import {
  RegisterUser,
  clearAuthState,
} from '../context/action/authAction/Register';
import {RootStackParams} from '../navigation/AuthNavigation';
import RegisterComponent from '../component/Register';
import {GlobalContext} from '../context/Provider';

interface change {
  name: string;
  value: string;
}

const Register = () => {
  const [form, setForm] = useState<{[key: string]: string}>({});
  const [error, setError] = useState<{[key: string]: string}>({});
  const [secureText, setSecureText] = useState(false);
  const {
    authDispatch,
    authState: {loading, errors, data},
  } = useContext(GlobalContext);
  const {navigate, setOptions} =
    useNavigation<StackNavigationProp<RootStackParams>>();

  const TextChange = () => {
    setSecureText(!secureText);
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data || errors) {
          clearAuthState()(authDispatch);
        }
      };
    }, []),
  );
  const onChangeText = ({name, value}: change) => {
    setForm(prev => {
      return {...prev, [name]: value};
    });
    if (value !== '') {
      if (name === 'password') {
        if (value.length <= 6) {
          setError((prev): {} => {
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
      setError(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };
  const onSubmit = async () => {
    if (!form.userName) {
      setError(prev => {
        return {...prev, userName: 'userName is required'};
      });
    }
    if (!form.firstName) {
      setError(prev => {
        return {...prev, firstName: 'firstName is required'};
      });
    }
    if (!form.lastName) {
      setError(prev => {
        return {...prev, lastName: 'lastName is required'};
      });
    }
    if (!form.email) {
      setError(prev => {
        return {...prev, email: 'email is required'};
      });
    }
    if (!form.password) {
      setError(prev => {
        return {...prev, password: 'password is required'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(error).every(item => !item)
    ) {
      RegisterUser(form)(authDispatch)(response => {
        navigate('LOGIN', {data: response});
      });
    }
  };

  return (
    <RegisterComponent
      onChangeText={onChangeText}
      form={form}
      error={error}
      errors={errors}
      onPress={onSubmit}
      secureText={secureText}
      TextChange={TextChange}
      loading={loading}
    />
  );
};

export default Register;
