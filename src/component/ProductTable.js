import Product from './Product';
import Category from './Category';
import {Text, View} from 'react-native';
import Search from './Search';
import Inventory from './Inventory';

export default function ProductTable({products}) {
  const rows = [];
  let lastCategory = null;

  console.log(products);
  products.forEach(product => {
    if (product.category !== lastCategory) {
      rows.push(
        <Category category={product.category} key={product.category} />,
      );
    }
    rows.push(<Product product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <View style={{marginTop: 10, paddingBottom: 10}}>
      <Search />
      <Inventory />
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{flex: 1, fontWeight: 'bold'}}>名称</Text>
        <Text style={{width: 50, fontWeight: 'bold'}}>价格</Text>
      </View>
      <View style={{}}>{rows}</View>
    </View>
  );
}
