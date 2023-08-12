/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import styles from './style';
import {Text} from 'react-native';
interface image {
  src: string;
}

function ImageComponent({src}: image) {
  const [imageLoading, setImageLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const onLoadStart = () => {
    setImageLoading(true);
  };
  const onLoadEnd = () => {
    setImageLoading(false);
  };
  const onError = () => {
    setImageLoading(false);
    setHasError(true);
  };
  return (
    <View style={styles.imageContainer}>
      {imageLoading && (
        <Text style={{alignSelf: 'center', fontSize: 21, paddingTop: 10}}>
          image loading...
        </Text>
      )}
      <Image
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onError={onError}
        source={{uri: src}}
        style={styles.image}
      />
    </View>
  );
}

export default ImageComponent;
