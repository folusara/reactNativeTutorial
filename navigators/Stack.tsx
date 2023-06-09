/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
// eslint-disable-next-line prettier/prettier
// import LoginScreen from '../screens/Login';
// import {
//   createNativeStackNavigator,
// } from '@react-navigation/native-stack';

import {createNativeStackNavigator}  from "@react-navigation/native-stack"
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductsScreen from '../screens/Products';
// import ProductInfoScreen from '../screens/ProductInfo';
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
// import Map from '../screens/Map';
// import Todo from '../screens/Todo';
import TodoApp from './BottomTab';
import Tasks from '../screens/Tasks';

export type ParamList = {
  Home: undefined;
  Login: undefined;
  Products: undefined
  ProductInfo: undefined
  Map: undefined
  Todo: undefined
  Done: undefined
  Tasks: undefined
  MyTasks: undefined
};

const {Navigator, Screen} = createNativeStackNavigator<ParamList>();

const Stack = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="MyTasks"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: '100',
        },
        headerStyle:{
          backgroundColor:'#0080ff',
        },
        headerTintColor: '#e91e63',
        // tabBarLabelStyle: {fontSize:20},
        // tabBarShowLabel:false
      }}
      // barStyle={{backgroundColor:'#694fad' }}
      >
        <Screen name="Home" component={HomeScreen}
          // options={{
          //   tabBarLabel: 'Home',
          //   tabBarIcon: ({ color, size }) => (
          //     <MaterialCommunityIcons name="home" color={color} size={size} />
          //   ),
          // }} 
          />
        <Screen name="Products"
          component={ProductsScreen}
         />
        <Screen name="MyTasks" component={TodoApp}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Stack;
