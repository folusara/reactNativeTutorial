/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
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
}
  return (
    <View style={styles.sectionContainer}>
        <View>
        <TextInput placeholder="Full Name"
            style={styles.textInput}
            onChangeText={handleNameSubmit}
          />
          <Button title='Login'  onPress={handleFormSubmit} />
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
    margin:10,
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

