/* eslint-disable prettier/prettier */
/* eslint-disable no-sequences */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {View,Button, StyleSheet, Text, Alert, TextInput} from 'react-native';
import MyButton from '../components/CustomButton';

const HomeScreen = ({ navigation }:any) => {
  const [name, setName] = useState('')
  useEffect(()=>{
    getData();
  },[]); 

  const getData = async () =>{
    try {
      AsyncStorage.getItem('User')
      .then(value => {
        if (value != null) {
          let user = JSON.parse(value)
        }
      }).catch(err=>{
        console.log(err);
      });
    } catch (error) {
     console.log(error);
      
    }
  };

  const upDateData = async () =>{
    if (name.length === 0) {
      Alert.alert('Warning', 'Please write your name')
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        Alert.alert('Success!', 'Your name has been updated!');
      } catch (error) {
        console.log(error);
      }
    }
  };
  const removeData = async () =>{
    try {
      await AsyncStorage.removeItem('UserName');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Welcome {name}</Text>
      <TextInput style={styles.textInput}
        placeholder="Update your name"
        value={name} 
      />
      <MyButton color='#ff7f00' title="Update Name" onPressFunction={upDateData}  />
      <MyButton  title="Remove Name"  onPressFunction={removeData}  />
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
  textInput:{
    height: 50,
    width: 300,
    borderStyle: 'solid',
    borderColor: 'white',
    textAlign: 'center',
    margin:10,
    color: 'black',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 10,
    // backgroundColor: 'white',
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
