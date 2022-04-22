/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
// eslint-disable-next-line prettier/prettier
import DetailsScreen from '../screens/Login';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import ProductsScreen from '../screens/Products';
import ProductInfoScreen from '../screens/ProductInfo';

export type ParamList = {
    Home: undefined;
    Login: undefined;
    Products: undefined
    ProductInfo: undefined
  };

const {Navigator, Screen} = createNativeStackNavigator<ParamList>();

const Stack = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
        <Screen name="Products" component={ProductsScreen} options={{title: 'Products'}} />
        <Screen name="ProductInfo" component={ProductInfoScreen} options={{title: 'ProductsInfo'}} />
        <Screen
          name="Login"
          component={DetailsScreen}
          options={{title: 'Login'}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Stack;
