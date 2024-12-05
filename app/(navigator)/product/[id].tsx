import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { IProduct } from '@/types/IProduct';
import { useDispatch } from 'react-redux';
import { getProductById } from '@/services/productService';

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
    <View>
      <Image source={{uri: product.image}} 
       className="w-full h-60 rounded-lg"
       />
    </View>
  )
}

export default ProductDetail