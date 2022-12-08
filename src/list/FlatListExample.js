import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const ITME_SIZE = 100;

const DATA = Array(ITME_SIZE)
  .fill(1)
  .map((_, i) => ({id: `id:${i}`, title: `id:${i}`}));

const Item = ({title}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const App = () => {
  const renderItem = ({item}) => Item(item.title);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        // debug
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    marginTop: StatusBar.currentHeight || 20,
  },
  itemContainer: {
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default App;
