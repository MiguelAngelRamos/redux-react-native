import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { clearCart } from '@/redux/slices/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state:RootState) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <View>
      <FlatList 
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
            <Text>cantidad: {item.quantity}</Text>
          </View>
        )}
      />

      <Button title="clear cart" onPress={() => dispatch(clearCart())}></Button>
    </View>
  )
}

export default Cart;
