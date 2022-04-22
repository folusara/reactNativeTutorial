/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params;
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Details Screen</Text>
      <Text style={styles.sectionTitle}>item Id: {JSON.stringify(itemId)}</Text>
      <Text style={styles.sectionTitle}>
        Other param: {JSON.stringify(otherParam)}
      </Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Login')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
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

export default DetailsScreen;

