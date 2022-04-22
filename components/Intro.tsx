/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { Image, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.Say something cool',
      image: require('../assets/undraw_Books_re_8gea.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../assets/undraw_Everywhere_together_re_xe5a.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: "I'm already out of descriptions\n\nLorem i",
      image: require('../assets//undraw_Suburbs_re_en49.png'),
      backgroundColor: '#22bcb5',
    },
  ];

const Intro = ({setShowRealApp}: any) => {

    const _renderItem = ({item}: any) => {
        return (
          <View style={{backgroundColor: item.backgroundColor}} key={item.key}>
              <Image source={item.image} />
             <Text>{item.title}</Text>
             <Text>{item.text}</Text>
          </View>
        )
      };
     const _renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-water-sharp"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        );
      };
    const  _renderDoneButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-trash"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        );
        };
      const _onDone = () => {
        setShowRealApp(true);
      };
    return (
      <AppIntroSlider data={slides} onDone={_onDone} renderItem={_renderItem} renderDoneButton={_renderDoneButton} renderNextButton={_renderNextButton}  />
    );
}
const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //[...]
});
export default Intro;