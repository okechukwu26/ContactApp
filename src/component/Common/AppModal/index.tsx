import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {Modal, View} from 'react-native';
import styles from './style';
import Icon from '../Icon';
interface ModalType {
  modalVisible: boolean;
  modalBody: JSX.Element;
  title?: string;
  setModalVisible: (tex: boolean) => void;
  modalFooter: JSX.Element;
}

function Index({
  modalVisible,
  title,
  modalBody,
  modalFooter,
  setModalVisible,
}: ModalType) {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => setModalVisible(false)}
        style={styles.modal}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.modalHeader}>
              <Icon type="evil" name="close" size={27} />
              <Text style={styles.modalText}>{title || 'Contact'}</Text>
              <View />
              <View />
            </View>
            <View style={styles.separator} />
            <View style={styles.body}>{modalBody}</View>
            {modalFooter}
            {!modalFooter && (
              <View style={styles.modalFooterHeader}>
                <View style={styles.modalFooterSection}>
                  <Text style={styles.modalFooterTitle}>Privacy policy</Text>
                  <View style={styles.modalFooterSeparator} />
                  <Text style={styles.modalFooterTitle}>Terms of Service</Text>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

export default Index;
