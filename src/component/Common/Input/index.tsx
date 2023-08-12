/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {Text, TextInput, View, ViewStyle} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './style';

interface IndexProps {
  containerStyles?: ViewStyle; // Specify the type of 'containerStyles'
  placeholder?: string;
  error?: string;
  onChangeText: (text: string) => void;
  value?: string;
  label?: string;
  icon?: JSX.Element;
  iconPosition?: string;
  secureText?: boolean;
  inputMode?: any;
  loading?: boolean;
}

const Index = ({
  containerStyles,
  placeholder,
  error,
  onChangeText,
  value,
  label,
  icon,
  iconPosition,
  secureText,
  inputMode,
  loading,
  ...props
}: IndexProps) => {
  const [focused, setFocused] = useState(false);

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }
    if (focused) {
      return colors.secondary;
    } else {
      return colors.primary;
    }
  };
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {flexDirection: getFlexDirection(), borderColor: getBorderColor()},
        ]}>
        <View>{icon && icon}</View>

        <TextInput
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={secureText}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={text => onChangeText(text)}
          editable={!loading}
          value={value}
          keyboardType={inputMode}
          {...props}
        />
      </View>
      {error && <Text style={{color: colors.danger}}>{error}</Text>}
    </View>
  );
};

export default Index;
