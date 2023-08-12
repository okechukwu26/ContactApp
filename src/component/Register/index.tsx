import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '..';
import Input from '../Common/Input';
import styles from './style';
import CustomButton from '../Common/CustomButton';
import Message from '../Common/Message';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/AuthNavigation';
import {StackNavigationProp} from '@react-navigation/stack';

interface IndexProps {
  onChangeText: ({text, values}: any) => void;
  error: Record<string, string>;
  errors: string;
  onPress: () => void;
  form: Record<string, string>;
  secureText: boolean;
  TextChange: () => void;
  loading: boolean;
}

const Index = ({
  error,
  onChangeText,
  onPress,
  secureText,
  TextChange,
  loading,
  errors,
}: IndexProps) => {
  const {navigate} = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <Container>
      <View>
        <Image
          source={require('../../assets/images/logo.png')}
          width={150}
          height={150}
          style={styles.image}
        />
        {errors && <Message danger message={errors} />}
        <Input
          placeholder="Enter UserName"
          label="User Name"
          onChangeText={(value: string) =>
            onChangeText({name: 'userName', value})
          }
          error={error.userName}
          loading={loading}
        />
        <Input
          placeholder="Enter firstName"
          label="First Name"
          onChangeText={(value: string) =>
            onChangeText({name: 'firstName', value})
          }
          error={error.firstName}
          loading={loading}
        />
        <Input
          placeholder="Enter lastName"
          label="Last Name"
          onChangeText={(value: string) =>
            onChangeText({name: 'lastName', value})
          }
          error={error.lastName}
          loading={loading}
        />
        <Input
          placeholder="Enter Email"
          label="Email"
          onChangeText={(value: string) => onChangeText({name: 'email', value})}
          error={error.email}
          loading={loading}
        />
        <Input
          placeholder="Enter password"
          label="Password"
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
          loading={loading}
        />
        <CustomButton
          title="Submit"
          onPress={onPress}
          secondary
          loading={loading}
          disabled={loading}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.input}> Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigate('LOGIN')}>
          <Text style={styles.log}>Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Index;
