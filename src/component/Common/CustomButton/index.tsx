/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Container from '../..';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import colors from '../../../assets/theme/colors';

interface buttonProp {
  title: string;
  onPress: () => void;
  secondary?: Boolean;
  primary?: Boolean;
  loading: boolean;
  disabled: boolean;
  imageLoading?: boolean;
  color?: Boolean;
}

const Index = ({
  title,
  onPress,
  secondary,
  loading,
  disabled,
  imageLoading,
  color,
  ...props
}: buttonProp) => {
  const getBkColor = () => {
    if (disabled) {
      return colors.info;
    }
    if (secondary) {
      return colors.secondary;
    }
  };

  return (
    <Container>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[styles.button, {backgroundColor: getBkColor()}]}>
        {loading && <ActivityIndicator size={21} color={colors.secondary} />}
        {title && (
          <Text
            style={{
              opacity: loading ? 0.3 : 1,
              fontSize: color ? 17 : 21,
              paddingLeft: 6,
              color: color && '#fff',
            }}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </Container>
  );
};

export default Index;
