import React from 'react'
import { FlatList, Text, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';
import CartItem from './CartItem';
import useProduct from './useProduct'

const Carrito = ({ navigation }) => {
    const { cart, calculaTotal } = useProduct()

  return (
    <>
      {cart?.length === 0 ? (
        <Text className="font-extrabold text-4xl self-center items-center">No hay productos </Text>
      ) : (
        <View>
          <Text className="text-4xl font-extrabold">Total Compra: $ {calculaTotal().toFixed(2)}</Text>
          <Button 
            title='CheckOut'
            onPress={() => {
              navigation.dispatch(
                StackActions.replace("FinCompra")
              )
            }}
          />
          <FlatList
            data={cart}
            keyExtractor={(product) => product.id}
            renderItem={({item}) => (
              <CartItem item={item} />
            )}
            contentContainerStyle={{ paddingHorizontal: 15}}
          />
        </View>
      )}
    </>
  )
}

export default Carrito