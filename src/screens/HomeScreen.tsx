import React from 'react';
import { View, Text, FlatList} from 'react-native';
import styles from '../theme/styles';

const products = [
  { name: 'mouse', price: 50 },
  { name: 'laptop', price: 1500 },
  { name: 'teclado', price: 80 },
  { name: 'monitor', price: 120 },
];

const HomeScreen = () => {
  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      />
      <View style={styles.total}>
        <Text style={styles.totalText}>Total: ${total}</Text>
      </View>
    </View>
  );
};



export default HomeScreen;