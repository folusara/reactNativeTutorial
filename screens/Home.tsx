/* eslint-disable prettier/prettier */
/* eslint-disable no-sequences */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {View,Button, StyleSheet, Text, Alert, TextInput} from 'react-native';

const HomeScreen: React.FC<any> = ({navigation}) => {
  let [name, setName] = useState('');

  useEffect(()=>{
    getData()
  },[]);
  const getData = async () =>{
    try {
     await AsyncStorage.getItem('name')
     .then(value=>{
       if (value != null) {
         setName(value);
       }
     })
    } catch (error) {
      console.log(error );
      
    }
  };
  
  const updateData = async () =>{
    try {
     await AsyncStorage.setItem('name',name)
    Alert.alert('Successfully Updated!','Your name has been updated!')
    } catch (error) {
      console.log(error );
      
    }
  }

  const removeData = async () =>{
    try {
     await AsyncStorage.removeItem('name')
    Alert.alert('Name Successfully Removed!','Your name has been removed!')
   navigation.navigate('Login') 
  } catch (error) {
      console.log(error );
      
    }
  }

  
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Home Screen</Text>
      <Text>Werlcome {name}!</Text>
      <TextInput placeholder="Full Name"
            style={styles.textInput}
            onChangeText={(e)=>setName(e)}
      />
       <Button title='Update'  onPress={updateData} />
       <Button title='Delete Data'  onPress={removeData} />

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
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
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
