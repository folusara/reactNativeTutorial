/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
<<<<<<< HEAD
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';

const LoginScreen = ({ route, navigation }) => {
  let [name, setName] = useState<string>('')

  useEffect(()=>{
    getData()
  },[]);
  const getData = async () =>{
    try {
     await AsyncStorage.getItem('name')
     .then(value=>{
       if (value != null) {
      navigation.navigate('Home')
       }
     })
    } catch (error) {
      console.log(error );
      
    }
  }



 const handleNameSubmit = (e:string) => {
  setName( name = e)
  console.log(name)

}

const handleFormSubmit = async ()  => {
  if (name.length === 0){
    Alert.alert('Warning', 'please write a name')
  } else {
    try {
      await AsyncStorage.setItem('name',name)
      navigation.navigate('Home')
    } catch (error) {
      console.log(error);
    }
  }
=======
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import MyButton from '../components/CustomButton';
// import { Register } from '../service/request';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import UserReducer from '../redux/reducers';
import { setName, setEmail, setPassword  } from '../redux/action';

const LoginScreen = () => {

  const {name, email , password} = useSelector((state:any) => state.UserReducer)
  const dispatch = useDispatch()



 const handleEmailSubmit = (e:string) => {
  dispatch(setEmail(e));
 }
 const handleNameSubmit = (e:string) => {
  dispatch(setName(e));
}
const handlePasswordSubmit = (e:string) => {
  dispatch(setPassword(e));
}

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
  if (name.length === 0 || email.length === 0 || password.length === 0 ) {
    Alert.alert('Warning', 'Please write your name')
  } else {
    try {

      dispatch(setName(name));
      dispatch(setEmail(email));
      dispatch(setPassword(password));

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
>>>>>>> 244b06eabeff5bf8511a6ea4695a49af13c5db9b
}
  return (
    <View style={styles.sectionContainer}>
        <View>
        <TextInput placeholder="Full Name"
            style={styles.textInput}
            onChangeText={handleNameSubmit}
          />
<<<<<<< HEAD
          <Button title='Login'  onPress={handleFormSubmit} />
=======
          <TextInput placeholder="Email"
            style={styles.textInput}
            onChangeText={handleEmailSubmit}
          />
          <TextInput placeholder="Password"
            style={styles.textInput}
            onChangeText={handlePasswordSubmit}
          />
           <MyButton
          title="Submit"
          onPressFunction ={handleFormSubmit} />

          {/* <Button title='sign up'  onPress={handleFormSubmit} /> */}
>>>>>>> 244b06eabeff5bf8511a6ea4695a49af13c5db9b
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

