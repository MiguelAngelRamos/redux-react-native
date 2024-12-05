import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const DrawerLayout = () => {
  return (
   <Drawer
    screenOptions={{
      headerRight: () => <CartIcon/>
    }}
   >
    <Drawer.Screen 
      
      name="product/index"
      options={{ 
        drawerLabel: 'Listado de productos',
        title: 'Productos',
        drawerIcon: ({color, size}) => (<Ionicons name="home-outline" size={size} color={color}/>)
      }}
    />
    <Drawer.Screen 
      name="cart/index"
      options={{ 
        drawerLabel: 'Carrito',
        title: 'Carrito de compra',
        drawerIcon: ({color, size}) => (<Ionicons name="cart-outline" size={size} color={color}/>)
      }}
    />
    <Drawer.Screen
      name="settings/index"
      options={{
        drawerLabel: 'Settings',
        title: 'Settings',
        drawerIcon: ({color, size}) => (<Ionicons name="compass" size={size} color={color}/>)
        }}
    />

  <Drawer.Screen
      name="product/[id]"
      options={{
        drawerLabel: 'Detail',
        title: 'Detail Product',
        drawerIcon: ({color, size}) => (<Ionicons name="compass" size={size} color={color}/>),
        drawerItemStyle: {display: 'none'}
        }}
    />
   </Drawer>
  )
}

function CartIcon() {

  const cartItems = useSelector((state: RootState) => state.cart.items);


  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
      // Mostramos el ícono del carrito junto con el número total de productos.
      <View className="flex-row items-center mr-4">
          <Ionicons name="cart-outline" size={24} color="black" />
          <Text className="ml-1">{totalItems}</Text>
      </View>
  );
}
export default DrawerLayout