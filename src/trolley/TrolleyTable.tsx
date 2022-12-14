import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TrolleyRow from './TrolleyRow';
import React from 'react';

enum RequestStatus {
  IDLE = 'IDLE',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  PENDING = 'PENDING',
}

interface Product {
  name: string;
  price: string;
  id: string;
  count: number;
}

type Products = Product[];

export default function TrolleyTable() {
  const [products, setProducts] = useState<Products>([]);
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(
    RequestStatus.IDLE,
  );

  const total = products.reduce((sum, product) => {
    console.log(sum);
    return sum + product.count * Number(product.price);
  }, 0);

  useEffect(() => {
    setRequestStatus(RequestStatus.PENDING);

    fetch('https://6389bee14eccb986e8990c52.mockapi.io/api/v1/products')
      .then(res => res.json())
      .then((products: Products) => {
        setRequestStatus(RequestStatus.SUCCESS);
        setProducts(products);
      })
      .catch(() => {
        setRequestStatus(RequestStatus.PENDING);
      });
  }, []);

  const getUpdateProducts = (product: Product) => {
    const newProducts = [...products];

    for (let index = 0; index < products.length; index++) {
      if (products[index].id === product.id) {
        newProducts[index] = product;
      }
    }
    return newProducts;
  };

  const handleIncrement = (product: Product) => {
    console.log('handleIncrement', product);
    const newProduct: Product = {...product, count: product.count + 1};
    const newProducts: Products = getUpdateProducts(newProduct);
    setProducts(newProducts);
  };

  const handleDecrement = (product: Product) => {
    console.log('handleDecrement', product);
    const count = product.count - 1 >= 0 ? product.count - 1 : 0;
    const newProduct: Product = {...product, count: count};
    const newProducts: Products = getUpdateProducts(newProduct);
    setProducts(newProducts);
  };

  if (requestStatus === RequestStatus.ERROR) {
    return <Text>???????????????</Text>;
  }

  if (requestStatus === RequestStatus.PENDING) {
    return <Text>?????????....</Text>;
  }

  const ss = styleConfig();
  return (
    <ScrollView style={{marginTop: 20, height: '100%'}}>
      <View style={ss.titleContainer}>
        <Text style={ss.text}>??????</Text>
        <Text style={ss.text}>??????</Text>
        <Text style={ss.lastText}>??????</Text>
      </View>
      <View>
        {products.map(product => (
          <TrolleyRow
            product={product}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            key={product.id}
          />
        ))}
      </View>
      <Text style={{marginVertical: 10, fontSize: 18, fontWeight: 'bold'}}>
        ??????:{total}
      </Text>
    </ScrollView>
  );
}

function styleConfig() {
  return StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
    },
    text: {
      fontSize: 17,
      color: 'black',
      fontWeight: 'bold',
      flex: 1,
    },
    lastText: {
      fontSize: 17,
      color: 'black',
      fontWeight: 'bold',
      alignSelf: 'flex-end',
    },
  });
}
