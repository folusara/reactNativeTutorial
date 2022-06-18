/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from "react-native";
import * as React from 'react';


function Map({route}:any) {
    const { city } = route.params;
    return ( 
        <View style={styles.sectionContainer}>
            <Text style={styles.text}>{city}</Text>
        </View>
     );
}
const styles = StyleSheet.create({
  sectionContainer: {
    // paddingHorizontal: 24,
    backgroundColor: 'white',
    // height: '100%',
    // width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'black',
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
export default Map;