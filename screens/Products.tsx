/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Rating, Button } from 'react-native-elements';
import { getProducts } from '../service/request';

const ProductsScreen = ({ navigation }: any) => {
    const [products, setProducts] = useState([{}]);
  function loadProducts() {
      getProducts().then((res:any)=>{
        console.log(res.data);
        setProducts(res.data);
      }).catch((err:any)=>{
          console.log(err);
      });
  }
  function getProductInfo(id:Number) {
      console.log(id);
  }
//  function ratingCompleted(rating:Number) {
//     console.log("Rating is: " + rating)
//   }

  useEffect(()=>{
      loadProducts();
  });
  return (
        <View >
             <FlatList
                    horizontal={false}
                    numColumns={2}
                    data={products}
                    keyExtractor={(item: any) => item.id}
                    style={styles.sectionContainer}
                    renderItem ={({ item }: any) => (
                        <View key={item.id}  style={styles.sectionView}>
                            <Image  source={{ uri: item.image}} style={{width: 120, height: 100}}  />
                            <Text style={styles.sectionTitle} >{ item.title }</Text>
                            <Rating style={{marginTop:15}}
                                key={item.id}
                                imageSize={20}
                                readonly
                                startingValue={item.rating}
                            />
                            <Button
                                title="Outline button"
                                type="outline"
                                style={{ marginTop:20 }}
                                onPress={() => {
                                    /* 1. Navigate to the Details route with params */
                                    navigation.navigate('ProductInfo', {
                                        productsId: item.id,
                                        productName: item.title,
                                    });
                                  }}
                            />
                        </View>
                )}
                />
        </View>
  );
};



const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'black',
    padding: 10
  },
  sectionView:{
    borderColor: 'white',
    borderWidth: 2,
    width: '48%',
    overflow: 'hidden',
    // height:200,
    padding:20,
    // display: 'flex',
    margin: 5,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default ProductsScreen;

