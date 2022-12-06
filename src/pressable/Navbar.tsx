import {Alert, Image, Pressable, Text, View} from 'react-native';
import React from 'react';

export default function Navbar() {
  return (
    <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
      <View style={{flex: 1, flexDirection: 'row-reverse'}}>
        <Pressable
          style={{
            marginRight: 12,
          }}
          onPress={() => {
            Alert.alert('点到我了');
          }}
          onPressIn={() => {
            console.log('onPressIn');
          }}
          onPressOut={() => {
            console.log('onPressOut');
          }}
          hitSlop={{bottom: 10, right: 10, left: 10}}
          pressRetentionOffset={{left: 20, right: 20}}>
          <Image
            source={require('./chat-more.png')}
            style={{width: 20, height: 20}}
          />
        </Pressable>
      </View>
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
