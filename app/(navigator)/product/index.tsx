import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IProduct } from '@/types/IProduct'
import { useRouter } from 'expo-router'
import { getProducts } from '@/services/productService'
import { FlatList } from 'react-native-gesture-handler'
import ProductCard from '@/components/ProductCard'



const Product = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  // iniciar navegacion programatica de expo router
  const router = useRouter();

  useEffect(() => {
    // getProducts().then( data => setProducts(data))
    // .catch(err => console.error(err))
    getProducts()
    .then(setProducts)
    .catch(console.error);
  }, []);

  return (
    <View className='flex-1 bg-gray-100 p-4'>
      <FlatList 
        data = {products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <ProductCard
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            onPress={() => router.push(`/product/${item.id}`)}
          />
        )}
        // Mostramos 2 Productos por fila
        numColumns={2}
      />
    </View>
  )
}

export default Product;