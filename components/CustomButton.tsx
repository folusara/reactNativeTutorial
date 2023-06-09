/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
function MyButton(props) {
    return ( 
        <Pressable
            onPress={props.onPressFunction}
            hitSlop={{top:10, bottom:10, right:10, left:10}} 
            android_ripple={{color: '#00f'}}
            style={({pressed})=>[
                {backgroundColor:  '#1eb900'},
                styles.button,
            ]}>
                <Text style={styles.text}>
                    {props.title}
                </Text> 
        </Pressable>
     );
}

const styles = StyleSheet.create({
    button:{
        width: '90%',
        height: 50,
        borderRadius:10,
        margin:20
    },
    text:{
        color:'#ffff',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    }
})

export default MyButton;