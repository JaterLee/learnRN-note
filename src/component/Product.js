import {Text, View} from 'react-native';

export default function Product({product = {name: 'čšć', price: '1ĺ'}}) {
  return (
    <View style={{flexDirection: 'row', marginTop: 5}}>
      <Text style={{flex: 1}}>{product.name}</Text>
      <Text style={{width: 50}}>{product.price}</Text>
    </View>
  );
}
