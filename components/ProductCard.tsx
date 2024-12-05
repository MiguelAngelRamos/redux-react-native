import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
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
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image 
          source={{uri: image}}
          style={styles.image}
          resizeMode='contain'
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    margin: 8,
    flex: 1
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 8
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8
  },
  price: {
    marginTop: 4,
    fontSize: 19,
    color: '#6b7280'
  }
})

export default ProductCard