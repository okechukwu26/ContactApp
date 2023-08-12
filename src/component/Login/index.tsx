import React from 'react';
import styles from './style';
import Container from '..';
import {Image, Text, TouchableOpacity} from 'react-native';
import Input from '../Common/Input';
import CustomButton from '../Common/CustomButton';
import Message from '../Common/Message';
import {View} from 'react-native';
import {RootStackParams} from '../../navigation/AuthNavigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

interface IndexProps {
  onChangeText: ({text, values}: any) => void;
  error: Record<string, string>;
  errors: string;
  onPress: () => void;
  form: Record<string, string>;
  secureText: boolean;
  TextChange: () => void;
  loading: boolean;
  justSignedUp: boolean;
}

const Index = ({
  error,
  onChangeText,
  secureText,
  TextChange,
  onPress,
  loading,
  errors,
  form,
  justSignedUp,
}: IndexProps) => {
  const {navigate} = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        width={150}
        height={150}
        style={styles.image}
      />
      {errors && <Message danger message={errors} />}
      {justSignedUp && <Message message="Account created successfuly" />}
      <Input
        placeholder="Enter Email"
        label="Email"
        loading={loading}
        onChangeText={(value: string) => onChangeText({name: 'email', value})}
        error={error.email}
        value={form.email}
      />
      <Input
        placeholder="Enter password"
        label="password"
        loading={loading}
        icon={
          <TouchableOpacity onPress={TextChange}>
            <Text>{secureText ? 'Shown' : 'Hide'}</Text>
          </TouchableOpacity>
        }
        secureText={secureText}
        iconPosition="right"
        onChangeText={(value: string) =>
          onChangeText({name: 'password', value})
        }
        error={error.password}
      />
      <CustomButton
        title={loading ? 'Please wait...' : 'Submit'}
        onPress={onPress}
        secondary
        loading={loading}
        disabled={loading}
      />
      <View style={styles.section}>
        <Text style={styles.input}>Don't have an account</Text>
        <TouchableOpacity onPress={() => navigate('REGISTER')}>
          <Text style={styles.log}>Register</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Index;
