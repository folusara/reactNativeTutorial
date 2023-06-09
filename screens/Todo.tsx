/* eslint-disable prettier/prettier */
import { FlatList, RefreshControl, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import React, { useState }  from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setTask, setTaskId } from '../redux/TasksSlice';
import { useEffect } from 'react';



function Todo({navigation}:any) {
  const [refreshing ,setRefreshing] = useState(false)

    const {Tasks}:any = useSelector((state:RootState) => state.Tasks);
    const dispatch = useDispatch();

    useEffect(()=>{
        getTasks();
    },[])

    const onRefresh = () => {
      // ToastAndroid.show('No more data available', ToastAndroid.SHORT);
      setRefreshing(true);
      AsyncStorage.clear();
      getTasks();
      setRefreshing(false);

    }

  const getTasks = () => {
    try {
        AsyncStorage.getItem('Tasks')
        .then(value => {
          if (value != null) {
            let parsedTasks = JSON.parse(value)
            if (parsedTasks && typeof parsedTasks === 'object') {
                dispatch(setTask(parsedTasks))
            }
            console.log(parsedTasks);
          }
        }).catch(err=>{
          console.log(err);
        });
      } catch (error) {
       console.log(error);
  }
      }
    return ( 
        <View style={styles.sectionContainer}>
           <FlatList
           data={Tasks}
           refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressBackgroundColor={'#0080ff'}
              // colors={'white'}
            />
           }
           renderItem={({item})=>(
            <TouchableOpacity
                style={styles.item}
                onPress={()=>{
                    dispatch(setTaskId(item.id));
                    navigation.navigate('Tasks');
                }}
                >
                <Text style={styles.title}>
                    { item.title }
                </Text>
                <Text style={styles.subTitle}>
                    { item.desc }
                </Text>
            </TouchableOpacity>
           )}
           keyExtractor={(item,index)=>index.toString()}
           />
            <TouchableOpacity
                style={styles.addTodobutton}
                onPress={()=>{
                    navigation.navigate('Tasks');
                    dispatch(setTaskId(Tasks.length + 1));
                }}
            >
                <MaterialCommunityIcons
                 name={'plus'}
                 size={35}
                 color={'#ffff'}
                 />
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({ 
    sectionContainer: {
      // paddingHorizontal: 24,
    //   width:'100%',
      backgroundColor: 'white',
      flex: 1,
      paddingTop: 20,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    item:{
        width: '90%',
        marginHorizontal: 10,
        marginVertical:7,
        paddingHorizontal:10,
        backgroundColor: '#ffff',
        alignContent: 'center',
        borderRadius: 10,
        elevation: 5,
        marginLeft: 22 ,
    },
    title:{
        color: 'black',
        fontSize: 30,
        margin: 5,
    },
    subTitle:{
        color: '#999999',
        fontSize: 20,
        margin: 5,
    },
    addTodobutton:{
        height: 60,
        width: 60,
        borderRadius: 60,
        backgroundColor: '#0080ff',
        justifyContent: 'center',
        alignItems:'center',
        position:'absolute',
        bottom: 20,
        right: 25,
        elevation:5,
    },
  });
export default Todo;