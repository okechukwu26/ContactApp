/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import FloatingButton from '../RenderItem/FloatingButton';
import colors from '../../assets/theme/colors';
import RenderItem from '../RenderItem';
export interface Contact {
  item: {
    _id: string;
    image: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
  // Add other properties if needed
}

interface Person {
  firstName: string;
  lastName: string;
}

const listEmpty = () => {
  return (
    <View style={{alignItems: 'center', paddingVertical: 20}}>
      <Text>No Contacts</Text>
    </View>
  );
};
const renderSeparator = () => {
  return (
    <View
      style={{
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: colors.info,
      }}
    />
  );
};
interface indexProps {
  loading: boolean;
  sortBy: string;
  data: Record<any, any>;
}

const Index = ({loading, sortBy, data}: indexProps) => {
  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator
          color={colors.secondary}
          style={{paddingVertical: 10}}
        />
      ) : (
        <>
          <FlatList
            data={
              sortBy
                ? data.sort((a: Person, b: Person) => {
                    const personA = a as Person;
                    const personB = b as Person;
                    if (sortBy === 'first Name') {
                      if (personB.firstName > personA.firstName) {
                        return -1;
                      } else {
                        return 1;
                      }
                    }
                    if (sortBy === 'last Name') {
                      if (personB.lastName > personA.lastName) {
                        return -1;
                      } else {
                        return 1;
                      }
                    }
                    return 0;
                  })
                : data
            }
            renderItem={({item}: Contact) => <RenderItem item={item} />}
            keyExtractor={({_id}) => _id}
            ItemSeparatorComponent={renderSeparator}
            ListEmptyComponent={listEmpty}
            ListFooterComponent={() => <View style={{height: 500}} />}
          />
        </>
      )}
      <FloatingButton />
    </SafeAreaView>
  );
};

export default Index;
