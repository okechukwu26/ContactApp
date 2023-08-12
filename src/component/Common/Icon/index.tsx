import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const getIcon = (type: string) => {
  switch (type) {
    case 'fontisto':
      return Fontisto;
    case 'AntDesign':
      return AntDesign;
    case 'material':
      return MaterialIcons;
    case 'fontAwesome5':
      return FontAwesome5;
    case 'evil':
      return EvilIcon;
    case 'ion':
      return Ionicons;
    case 'materialCommunity':
      return MaterialCommunityIcons;
    default:
      return FontAwesome;
  }
};

const Index = ({
  type,
  name,
  size,
  color,
  style,
}: {
  type: string;
  name: string;
  size: number;
  color?: string;
  style?: Record<any, any>;
}) => {
  const FontIcon = getIcon(type);

  return <FontIcon name={name} size={size} color={color} style={style} />;
};

export default Index;
