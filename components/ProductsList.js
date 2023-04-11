import React from 'react';
import { FlatList } from 'react-native';
import ProductCard from './ProductCard';
import useProduct from './useProduct'

const ProductsList = () => {
    const { products } = useProduct()

  return (
    <FlatList
    data={products}
    keyExtractor={(product) => product.id}
    renderItem={({item}) => (
        <ProductCard  product={item}/>
    )}
    contentContainerStyle={{ paddingHorizontal: 15}}
  />
  )
}

export default ProductsList