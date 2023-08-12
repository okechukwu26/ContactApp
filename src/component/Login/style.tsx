import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  image: {
    alignSelf: 'center',
  },
  section: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  input: {
    fontSize: 17,
  },
  log: {
    fontSize: 17,
    paddingLeft: 5,
    color: colors.secondary,
  },
});
