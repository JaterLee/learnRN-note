import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TrolleyRow(props: {
  product: any;
  handleIncrement: (e: any) => void;
  handleDecrement: (e: any) => void;
}) {
  // console.log('-------2-');
  // console.log(product.product.name);
  // product = product.product;
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 20,
        alignItems: 'center',
      }}>
      <Text style={{flex: 1}}>{props.product.name}</Text>
      <Text style={{flex: 1}}>{props.product.price}</Text>
      <View
        style={{
          // alignSelf: 'flex-end',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          title="+"
          onPress={() => props.handleIncrement(props.product)}
        />
        <Text>{props.product.count}</Text>
        <Button
          title="-"
          onPress={() => props.handleDecrement(props.product)}
        />
      </View>
    </View>
  );
}
