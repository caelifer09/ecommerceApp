import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Switch, Text, View, SafeAreaView, TouchableHighlight } from 'react-native';
import { useColorScheme } from 'nativewind'
import ProductsList from './ProductsList';
import { AntDesign } from '@expo/vector-icons'
import useProduct from './useProduct'


const Home = ({ navigation }) => {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    const { cart } = useProduct()

  return (
    <SafeAreaView className={`flex-1 items-center justify-center bg-gray-200 dark:bg-black p-2`}>
      <View className="flex-row w-full gap-5 justify-around items-center">
        <Text className="dark:text-white text-2xl font-bold" >Products - New Arrive  !</Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
        <TouchableHighlight onPress={() => navigation.navigate("Carrito")}>
          <View className="flex-row">          
              <AntDesign 
                name="shoppingcart"
                size={36}
                color={colorScheme === "light" ? "black" : "white"}
                />        
              <Text>{cart?.length}</Text>
            </View>
        </TouchableHighlight>
      </View>
      <ProductsList />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  )
}

export default Home