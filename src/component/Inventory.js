import {Switch, Text, View} from 'react-native';

export default function Inventory() {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
      <Switch></Switch>
      <Text style={{marginLeft: 20}}>只显示有库存的商品</Text>
    </View>
  );
}
