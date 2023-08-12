declare module 'react-native-vector-icons/*' {
  import {Component} from 'react';
  import {StyleProp, ViewStyle} from 'react-native';

  interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
  }

  class Icon extends Component<IconProps> {}

  export default Icon;
}
