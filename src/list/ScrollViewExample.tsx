import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import React from 'react';

const NUM_ITEMS = 500;

const makeContent = (itemSize: number, styles: any) => {
  return Array(itemSize)
    .fill(1)
    .map((_, i) => (
      <Pressable
        onLayout={() => {
          console.log('layout' + i);
        }}
        key={i}
        style={styles}>
        <Text>{'Item' + i}</Text>
      </Pressable>
    ));
};

const APP = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        onScroll={e => console.log(e.nativeEvent.layoutMeasurement)}
        scrollEventThrottle={1000}>
        {makeContent(NUM_ITEMS, styles.itemWrapper)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: 'red',
    padding: 30,
    margin: 5,
  },
});

export default APP;
