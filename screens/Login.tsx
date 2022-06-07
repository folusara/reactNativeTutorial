/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import MyButton from '../components/CustomButton';
// import { Register } from '../service/request';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {

useEffect(()=>{
  getData();
},[]);

const getData = async () =>{
  try {
    AsyncStorage.getItem('UserName')
    .then(value => {
      if (value != null) {
        navigation.navigate('Home')
      }
    }).catch(err=>{
      console.log(err);
    });
  } catch (error) {
   console.log(error);
  }
};

const handleFormSubmit = async () => {
  if (name.length === 0) {
    Alert.alert('Warning', 'Please write your name')
  } else {
    try {

      // let formData = {
      //   name: name,
      //   email: email,
      //   password: password
      // }
      // await AsyncStorage.setItem('User', JSON.stringify(formData))
      navigation.navigate('Home')
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(formData);
  // Register(formData).then((res:any)=>{
  //   console.log(res);
  // }).catch((err:any)=>{
  //   console.log(err);
  // });
}
  return (
    <View style={styles.sectionContainer}>
        <View>
        <TextInput placeholder="Full Name"
            style={styles.textInput}
            // onChangeText={handleNameSubmit}
          />
           <MyButton
          title="Submit"
          onPressFunction ={handleFormSubmit} />

          {/* <Button title='sign up'  onPress={handleFormSubmit} /> */}
        </View>
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
    color: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  button:{
    height: 50,
    width: 300,
  }
});

export default LoginScreen;

