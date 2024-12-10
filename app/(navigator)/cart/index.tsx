import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { clearCart } from '@/redux/slices/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state:RootState) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Detalle de carrito de compra</Text>
      <FlatList 
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View className="flex-row justify-between items-center p-4 bg-white rounded-lg mb-2 shadow-slate-400">
            <Text>{item.title}</Text>
            <Text>${item.price} x {item.quantity}</Text>
          </View>
        )}
      />

      <Button title="clear cart" onPress={() => dispatch(clearCart())}></Button>
    </View>
  )
}

export default Cart;
