/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
// eslint-disable-next-line prettier/prettier
import DetailsScreen from '../screens/Login';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

export type ParamList = {
    Home: undefined;
    Login: undefined;
  };

const {Navigator, Screen} = createNativeStackNavigator<ParamList>();

const Stack = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
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
