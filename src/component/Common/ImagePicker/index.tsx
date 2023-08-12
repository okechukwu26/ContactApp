import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from '../Icon';
import styles from './style';

import {
  launchImageLibrary,
  ImageLibraryOptions,
  launchCamera,
} from 'react-native-image-picker';
const Index = React.forwardRef<
  React.RefObject<RBSheet>,
  {onFileSelected: (file: any) => void}
>(({onFileSelected}, ref) => {
  const data = [
    {
      name: 'Take a picture',
      icon: <Icon type="fontAwesome5" name="camera" size={15} />,
      onPress: () => {
        const options: ImageLibraryOptions = {
          mediaType: 'photo', // Use MediaType enum value here
          maxWidth: 200,
          maxHeight: 200,
          selectionLimit: 1,
          includeBase64: false,
        };
        launchCamera(options)
          .then(image => {
            onFileSelected(image);
          })
          .catch(err => console.log(err.response));
      },
    },
    {
      name: 'Choose from gallery',
      icon: <Icon type="fontisto" name="picture" size={15} />,
      onPress: async () => {
        // const options = {
        //   title: 'select image',
        //   type: 'library',
        //   mediaType: 'photo',
        //   options: {
        //     maxWidth: 200,
        //     maxHeight: 200,
        //     selectionLimit: 1,
        //     includeBase64: false,
        //   },
        // };

        const options: ImageLibraryOptions = {
          mediaType: 'photo', // Use MediaType enum value here
          maxWidth: 200,
          maxHeight: 200,
          selectionLimit: 1,
          includeBase64: false,
        };
        launchImageLibrary(options)
          .then(image => {
            onFileSelected(image);
          })
          .catch(err => console.log(err));
        // if (image) {
        // } else {
        // }

        // ImagePicker.openPicker({
        //   width: 300,
        //   height: 400,
        //   cropping: true,
        //   freeStyleCropEnabled: true,
        // })
        //   .then(res => {
        //     onFileSelected(res);
        //   })
        //   .catch(err => console.log(err));
      },
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={190}
      duration={250}
      closeOnDragDown
      dragFromTopOnly
      customStyles={{
        container: {
          // height: 200,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <View>
        {data.map(({name, onPress, icon}) => {
          return (
            <TouchableOpacity
              onPress={onPress}
              key={name}
              style={styles.imageContainer}>
              {icon}
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </RBSheet>
  );
});

export default Index;
