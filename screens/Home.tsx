/* eslint-disable prettier/prettier */
/* eslint-disable no-sequences */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {View,Button, StyleSheet, Text} from 'react-native';
import MyButton from '../components/CustomButton';

const HomeScreen: React.FC<any> = ({navigation}) => {
  const [name, setName] = useState('');

  useEffect(()=>{
    getData()
  },[]); 

  const getData = async () =>{
    try {
      AsyncStorage.getItem('UserName')
      .then(value => {
        if (value != null) {
          setName(value)
        }
      }).catch(err=>{
        console.log(err);
      });
    } catch (error) {
     console.log(error);
      
    }
  };
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Welcome {name}</Text>
      <MyButton  
          title="Custom Button"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Login', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }} />
   </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    // paddingHorizontal: 24,
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    // fontWeight: '600',
    fontFamily:'Inter-Thin',

  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
