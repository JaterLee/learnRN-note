import {Text, View} from 'react-native';
import React from 'react';

export default function Navbar() {
  return (
    <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
      <View
        style={{flex: 1, backgroundColor: 'red', width: 50, height: 50}}></View>
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          fontSize: 18,
        }}>
        微信
      </Text>
      <View style={{flex: 1}}></View>
    </View>
  );
}
