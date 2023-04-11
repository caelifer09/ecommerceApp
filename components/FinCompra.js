import React, {useEffect} from 'react'
import { FlatList, Text, View, Button } from 'react-native';
import useProduct from './useProduct'

const FinCompra = ({ navigation}) => {
    const { LimpiarCart } = useProduct()

    useEffect(() => {
        LimpiarCart();
    }, []);

  return (
    <View className="flex-1 bg-white items-center justify-center">
        <Text className="font-extrabold text-4xl">Gracias por tu compra !!</Text>
        <Button 
            title='Volver'
            onPress={() => navigation.popToTop()}
        />
    </View>
  )
}

export default FinCompra