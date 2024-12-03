import { View, Text } from 'react-native'
import React from 'react'


interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  onPress : () => void
}

const ProductCard: React.FC<IProductCardProps> = ({title, price, image, onPress}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default ProductCard