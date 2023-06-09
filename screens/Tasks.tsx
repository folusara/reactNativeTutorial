/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper';
import MyButton from '../components/CustomButton';
import { setTask, setTaskId } from '../redux/TasksSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from '../redux/store';


const Tasks = ({navigation}) => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    useEffect(()=>{
        getTasksHandler()
    },[])

    const {Tasks}:any = useSelector((state:RootState) => state.Tasks);
    // const {Tasks, TaskId} = useSelector((state:RootState) => state.Tasks);
    const dispatch = useDispatch();

    const getTasksHandler = () => {
        const Task = Tasks.find( (task:any) => task.id === TaskId);
        console.log(Task);
        if (Task) {
            setTitle(Task.title);
            setDesc(Task.desc);
        }
    }

    const setTaskHandler = () => {
        if (title.length === 0) {
            Alert.alert('Warning', 'Please write the title of your Task')
        } else {

            try {
                console.log(TaskId);
                const Task = {
                    id: TaskId,
                    title:title,
                    desc: desc,
                }                
                const index = Tasks.findIndex( (task:any) => task.id === TaskId);
                console.log(Task.id,TaskId);
                console.log(index);
                let newTasksList: any[] = [];
                if (index > -1) {
                    newTasksList = [...Tasks];
                    newTasksList[index] = Task;
                } else {
                    newTasksList = [...Tasks, Task]
                }
                AsyncStorage.setItem('Tasks', JSON.stringify(newTasksList))
                .then(()=>{
                    dispatch(setTask(newTasksList));
                    Alert.alert('Success!', 'Task saved Successfully');
                    navigation.goBack();
                }).catch(err=>{
                    console.log(err);
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
  return (
    <View style={styles.sectionContainer}>
        <TextInput
            value={title}
            style={styles.textInput}
            placeholder='Title'
            onChangeText={(value)=>{setTitle(value)}}
        />
        <TextInput
            value={desc}
            style={styles.textInput}
            // eslint-disable-next-line jsx-quotes
            placeholder='Description'
            multiline={true}
            onChangeText={(value)=>{setDesc(value)}}
        />
        <MyButton 
         title="Save Task"
         onPressFunction={setTaskHandler}
        />
    </View>
  )
};

const styles = StyleSheet.create({ 
    sectionContainer: {
      // paddingHorizontal: 24,
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'center',
      padding:20
    //   justifyContent: 'center',
    },
    text:{
        color: 'black',
    },
    textInput:{
        width:'100%',
        // height: 50,
        borderWidth: 1,
        borderColor: '#555555',
        borderRadius: 10,
        backgroundColor: 'white',
        textAlign: 'left',
        fontSize: 20,
        margin: 10,
        // paddingHorizontal:10,
        // paddingVertical: 10
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

export default Tasks