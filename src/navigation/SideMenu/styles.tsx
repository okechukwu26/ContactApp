import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    paddingTop: 20,
    marginTop: 30,
  },
  sideMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  text: {
    fontSize: 21,
    paddingLeft: 7,
    borderBottomColor: colors.info,
  },
  divider: {
    height: 0.5,
    width: '100%',
    backgroundColor: colors.info,
  },
});
