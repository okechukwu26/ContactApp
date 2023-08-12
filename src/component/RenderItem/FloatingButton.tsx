import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import Icon from '../Common/Icon';
import styles from './style';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/HomeNavigation';
function FloatingButton() {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CREATE_CONTACT')}>
      <View style={styles.floatingButton}>
        <Icon type="AntDesign" name="plus" size={21} color={colors.snow} />
      </View>
    </TouchableOpacity>
  );
}

export default FloatingButton;
