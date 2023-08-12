/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {ScrollView, View} from 'react-native';
interface GlobalProviderProps {
  children: ReactNode;
}

const Container = ({children}: GlobalProviderProps) => {
  return (
    <ScrollView>
      <View style={{padding: 10}}>{children}</View>
    </ScrollView>
  );
};

export default Container;
