/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, Text, TouchableOpacity, Switch} from 'react-native';
import Container from '..';
import styles from './style';
import Icon from '../Common/Icon';
import Input from '../Common/Input';
import CustomButton from '../Common/CustomButton';
import Message from '../Common/Message';
import ImagePicker from '../Common/ImagePicker';
interface IndexProps {
  onChangeText: ({text, values}: any) => void;
  form: Record<string, any>;
  error: Record<string, any>;
  closeSheet: () => void;
  openSheet: () => void;
  sheetRef: any;
  onPress: () => void;
  loading: boolean;
  errors: any;
  onFileSelected: (text: any) => void;
  imageError: any;
  imageLoading: boolean;
  stateImage: any;
  toggleSwitch: () => void;
}

const Index = ({
  onChangeText,
  form,
  error,
  openSheet,
  onFileSelected,
  sheetRef,
  onPress,
  errors,
  loading,
  imageError,

  imageLoading,
  toggleSwitch,
}: IndexProps) => {
  return (
    <Container>
      <Image
        source={
          form.image
            ? {uri: form.image}
            : require('../../assets/images/user.png')
        }
        style={styles.logoImage}
      />
      {imageLoading ? (
        <Text style={{alignSelf: 'center'}}>image uploading</Text>
      ) : (
        <TouchableOpacity onPress={openSheet}>
          <View style={styles.chooseImage}>
            <Text style={{paddingRight: 10}}>Choose image</Text>
            <Icon type="AntDesign" name="camera" size={17} />
          </View>
        </TouchableOpacity>
      )}
      {errors && <Message message={errors} danger />}
      {imageError && <Message message={imageError} danger />}
      <Input
        label="firstName"
        onChangeText={value => onChangeText({name: 'firstName', value})}
        placeholder="Enter firstName"
        error={error.firstName}
        value={form.firstName}
      />
      <Input
        label="lastName"
        onChangeText={value => onChangeText({name: 'lastName', value})}
        placeholder="Enter lastName"
        error={error.lastName}
        value={form.lastName || ''}
      />
      <Input
        label="phone"
        onChangeText={value => onChangeText({name: 'phone', value})}
        placeholder="Enter phone"
        error={error.phone}
        inputMode="numeric"
        value={form.phone || ''}
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Add to favorite</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={form.isFavorite ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={form.isFavorite}
        />
      </View>
      <CustomButton
        title={loading ? 'Please wait...' : 'Submit'}
        onPress={onPress}
        secondary
        loading={loading}
        disabled={loading}
        imageLoading={imageLoading}
      />

      <ImagePicker ref={sheetRef} onFileSelected={onFileSelected} />
    </Container>
  );
};

export default Index;
