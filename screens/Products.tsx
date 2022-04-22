/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

const ProductsScreen = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params;
  return (
   
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

export default ProductsScreen;

