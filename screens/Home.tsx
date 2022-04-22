/* eslint-disable prettier/prettier */
/* eslint-disable no-sequences */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Button, StyleSheet, Text} from 'react-native';

const HomeScreen: React.FC<any> = ({navigation}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Home Screen</Text>
      <Button
        title="Go to login Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Login', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
       <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Products')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
