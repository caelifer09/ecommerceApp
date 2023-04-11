import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Home';
import Carrito from './components/Carrito';
import FinCompra from './components/FinCompra';
import { ProductProvider } from './components/productContext'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={Main}
            options={{title: "Tienda"}}
          />
          <Stack.Screen 
            name="Carrito"
            component={Carrito}
            options={{title: "Carrito"}}
          />
          <Stack.Screen 
            name="FinCompra"
            component={FinCompra}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}

