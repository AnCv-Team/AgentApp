import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home/HomeScreen';
import ImportGoods from '../screens/importGoods/ImportGoods';
import ImportGoodsProductsScreen from '../screens/importGoods/importGoodsProducts/ImportGoodsProductsScreen';
import CreateStoreScreen from '../screens/store/createStore/CreateStoreScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ImportGoods" component={ImportGoods} options={{ headerShown: false }} />
      <Stack.Screen name="ImportGoodsProducts" component={ImportGoodsProductsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Warehouse" component={CreateStoreScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
