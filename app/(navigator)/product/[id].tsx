import { View, Text, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { IProduct } from '@/types/IProduct';
import { useDispatch } from 'react-redux';
import { getProductById } from '@/services/productService';
import { addToCart } from '@/redux/slices/cartSlice';

const ProductDetail:React.FC = () => {
  const {id} = useLocalSearchParams();
  const router = useRouter();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [error, setError ] = useState<string | null>(null);
  // Redux
  const dispatch = useDispatch();

  // Fetch
  useEffect(() => {
    if(id) {
      getProductById(Number(id))
        .then(data => setProduct(data))
        .catch(error => console.error(error));
    } else {
      // el error
      setError('No existe el id para este producto');
    }
  },[id]);
  
  if(error) {
    return <Text>{error}</Text>
  }

  if(!product) {
    return <Text>Loading....</Text>
  }
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Image 
       source={{uri: product.image}} 
       className="w-full h-60 rounded-lg"
       />
       <Text className="text-2xl font-bold mt-4">{product.title}</Text>
       <Text className="text-2xl font-bold mt-4">{product.price}</Text>
       <Text className="text-gray-600 mt-4">{product.description}</Text>
       <Button 
        title="add to cart"
        onPress={() => {
          dispatch(addToCart({...product, quantity: 1}))
          router.push("/cart")
        }}
       >

       </Button>
    </View>
  )
}

export default ProductDetail