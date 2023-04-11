import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';


const CartItem = ({item}) => {
    const { image, category, title, price, description, qty } = item

  return (
    <View className="flex-1 gap-2 p-2 mt-2">
        <Text className="text-2xl font-extrabold">{title}</Text>
        <View className="flex-row">
            <Image source={{ uri: image}} className="w-1/2 h-40" style={{ resizeMode: "contain"}} />
            <View className="flex-col justify-between p-2">
                <Text className="text-sm font-extrabold">Cantidad: {qty}</Text>
                <Text className="text-xl font-extrabold">$ {qty * price}</Text>
            </View>            
        </View>
    </View>
  )
}

export default CartItem