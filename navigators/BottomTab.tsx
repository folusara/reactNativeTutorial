/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import HomeScreen from '../screens/Home';
// eslint-disable-next-line prettier/prettier
// import LoginScreen from '../screens/Login';
// import {
//   createNativeStackNavigator,
// } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator}  from "@react-navigation/native-stack"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import ProductsScreen from '../screens/Products';
// import ProductInfoScreen from '../screens/ProductInfo';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
// import Map from '../screens/Map';
import Todo from '../screens/Todo';
import Done from '../screens/Done';
import Tasks from '../screens/Tasks';
import TaskDetailPage from '../screens/TaskDetailPage';

export type ParamLists = {
    Home: undefined;
    Login: undefined;
    Products: undefined
    ProductInfo: undefined
    Map: undefined
    Todo: undefined
    Done: undefined
    Tasks: undefined
    TaskDetailPage: undefined
  };

const {Navigator, Screen} = createBottomTabNavigator<ParamLists>();
// const {Navigator, Screen} = createMaterialBottomTabNavigator<ParamList>();

function TodoApp({navigation}) {
  return (  
    <NavigationContainer>
        <Navigator initialRouteName="Todo"
            screenOptions={
            ({ route })=>({
              tabBarIcon:({focused,size, color}) =>{
                let iconName;
                if (route === "Todo") {
                  iconName = 'clipboard-list';
                  size = focused ? 25 : 20;
                } else if (route === 'Done') {
                  iconName = 'clipboard-check';
                  size = focused ? 25 : 20;
                }
                return (
                  <MaterialCommunityIcons name={iconName} size={size} color={color} />
                )
              },
              tabBarActiveTintColor: '#0080ff',
              tabBarInactiveTintColor: '#777777',
              tabBarLabelStyle:{fontSize:20, fontWeight:"bold"},
              headerTitleAlign: 'center',
                headerTitleStyle: {
                fontSize: 30,
                fontWeight: '100',
                },
                headerStyle:{
                backgroundColor:'#0080ff',
                },
                headerTintColor: 'white',
                })
          }
          >
                <Screen name="Todo" component={Todo}/>
                <Screen name="Done" component={Done}/>
               <Screen name="Tasks" component={Tasks}/>
               {/* <Screen name="TaskDetailPage" component={TaskDetailPage}/> */}
          </Navigator>
    </NavigationContainer>
  )
}
export default TodoApp;
