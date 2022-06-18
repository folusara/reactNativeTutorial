/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
// eslint-disable-next-line prettier/prettier
import LoginScreen from '../screens/Login';
// import {
//   createNativeStackNavigator,
// } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductsScreen from '../screens/Products';
import ProductInfoScreen from '../screens/ProductInfo';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Map from '../screens/Map';

export type ParamList = {
    Home: undefined;
    Login: undefined;
    Products: undefined
    ProductInfo: undefined
    Map: undefined
  };

const {Navigator, Screen} = createBottomTabNavigator<ParamList>();
// const {Navigator, Screen} = createMaterialBottomTabNavigator<ParamList>();


const Stack = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        // tabBarLabelStyle: {fontSize:20},
        // tabBarShowLabel:false
      }}
      // barStyle={{backgroundColor:'#694fad' }}
      >
        <Screen name="Home" component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} />
        <Screen name="Products"
          component={ProductsScreen}
          options={{
            tabBarBadge:3,
            tabBarLabel: 'Products',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} 
         />
        <Screen name="ProductInfo" component={ProductInfoScreen} 
         options={{
          tabBarLabel: 'ProductInfo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}  />
        <Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
         <Screen
          name="Map"
          component={Map}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map" color={color} size={size} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Stack;
