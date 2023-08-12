import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.6)',

    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    minHeight: 300,
    borderRadius: 7,
    marginHorizontal: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    alignitems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  modalText: {
    fontSize: 21,
  },
  separator: {
    borderBottomWidth: 0.5,
    borderColor: colors.info,
  },
  modalFooterHeader: {
    marginHorizontal: 15,
  },
  modalFooterSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    minHeight: 220,
  },
  modalFooterSeparator: {
    height: 5,
    width: 5,
    borderRadius: 100,
    backgroundColor: colors.info,
  },
  modalFooterTitle: {
    fontSize: 17,
  },
});
