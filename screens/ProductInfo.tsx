/* eslint-disable prettier/prettier */
/* eslint-disable no-sequences */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ProductInfoScreen: React.FC<any> = ({route}) => {
    // const { productsId,  productName} = route.params;
  return (
    <View style={{backgroundColor:'black'}}>
         {/* <Text style={{color:'black'}}>itemId: {JSON.stringify(productsId)}</Text>
        <Text>otherParam: {JSON.stringify(productName)}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: 'black',
        padding: 10,
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

export default ProductInfoScreen;
