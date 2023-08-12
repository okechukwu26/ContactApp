import React, {useState} from 'react';
import SettingComponent from '../component/SettingComponent';

export const Settings = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SettingComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
};
