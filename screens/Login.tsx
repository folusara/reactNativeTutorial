/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import MyButton from '../components/CustomButton';
import { Register } from '../service/request';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ route, navigation }) => {
  let [email, setEmail] = useState<string>('')
  let [name, setName] = useState<string>('')
  let [password, setPassword] = useState<string>('')
  let [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  })

 const handleEmailSubmit = (e:string) => {
   setEmail(email = e)
   console.log(email);
   formData.email = email
   setFormData(formData)
 }
 const handleNameSubmit = (e:string) => {
  setName( name = e)
  console.log(name);
  formData.name = name
   setFormData(formData)

}
const handlePasswordSubmit = (e:string) => {
  setPassword(password = e)
  console.log(password)
  formData.password = password
   setFormData(formData)
}

const handleFormSubmit = async () => {
  if (name.length == 0) {
    Alert.alert('Warning', 'Please write your name')
  } else {
    try {
      await AsyncStorage.setItem('UserName', name)
      navigation.navigate('Home')
    } catch (error) {
      
    }
  }
  console.log(formData);
  Register(formData).then((res:any)=>{
    console.log(res);
  }).catch((err:any)=>{
    console.log(err);
  });
}
  return (
    <View style={styles.sectionContainer}>
        <View>
        <TextInput placeholder="Full Name"
            style={styles.textInput}
            onChangeText={handleNameSubmit}
          />
          {/* <TextInput placeholder="Email"
            style={styles.textInput}
            onChangeText={handleEmailSubmit}
          />
          <TextInput placeholder="Password"
            style={styles.textInput}
            onChangeText={handlePasswordSubmit}
          /> */}
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
    borderRadius: 10,
    // backgroundColor: 'white',
  },
  button:{
    height: 50,
    width: 300,
  }
});

export default LoginScreen;

