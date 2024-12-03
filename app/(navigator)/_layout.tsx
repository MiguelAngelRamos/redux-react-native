import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons'

const DrawerLayout = () => {
  return (
   <Drawer>
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
   </Drawer>
  )
}

export default DrawerLayout