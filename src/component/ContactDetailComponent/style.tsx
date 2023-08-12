import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  scrollView: {
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  textContainer: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderBottomColor: colors.info,
    borderBottomWidth: 0.3,
  },
  text: {
    fontSize: 30,
  },
  firstSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    borderBottomColor: colors.info,
    borderBottomWidth: 0.3,
    paddingVertical: 20,
  },
  secondSection: {
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomColor: colors.info,
    borderBottomWidth: 0.3,
  },
  secondSectionBody1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  phone: {fontWeight: '500', fontSize: 16},
  thirdSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderBottomColor: colors.info,
    borderBottomWidth: 0.3,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  button: {
    paddingRight: 15,
    width: 240,
  },
});
