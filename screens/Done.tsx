/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';


function Done() {
    return ( 
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>done </Text>
        </View>
     );
}

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

export default Done;