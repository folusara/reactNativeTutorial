/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import MyButton from '../components/CustomButton';
// import { Register } from '../service/request';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../redux/nameSlice'
import { RootState } from '../redux/store';
import { setCount } from '../redux/countSlice';

const LoginScreen = ({navigation}:any) => {

  let [nameValue, setNameValue] = useState('');
useEffect(()=>{
  getData();
},[]);

const dispatch = useDispatch();
const {name}  = useSelector((state:RootState) => state.name);
const { count } =  useSelector((state:RootState) => state.count);

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
  if (nameValue.length === 0) {
    Alert.alert('Warning', 'Please write your name')
  } else {
    try {
      // let formData = {
      //   name: name,
      //   email: email,
      //   password: password
      // }
      // await AsyncStorage.setItem('User', JSON.stringify(formData))
      dispatch(setName(nameValue))
      dispatch(setCount(1))
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
           <Text style={styles.text}>{count}</Text>
          <Text style={styles.text}>{name}</Text>
        <TextInput placeholder="Full Name"
            style={styles.textInput}
            onChangeText={(e)=>{setNameValue(e)}}
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
  text:{
    color: 'white'
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
  },
  button:{
    height: 50,
    width: 300,
  }
});

export default LoginScreen;

