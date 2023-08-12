import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  renderContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  renderSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 45,
    right: 10,
    backgroundColor: 'red',
    height: 50,
    borderRadius: 100,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
