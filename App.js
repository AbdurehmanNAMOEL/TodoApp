import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import ToDo from './pages/ToDo';
let id=0
export default function App() {
  const [toDoList,setToDoList]=useState([])
  const [input,setInput]=useState('')

  const handleTodo=()=>{
    setToDoList([...toDoList,{tdo:input,id}])
    id++;
  }

  return (
    <View style={styles.container}>
      <ToDo handleTodo={handleTodo} setInput={setInput}/>
      <ScrollView style={styles.listBigContainer}>
      {toDoList.map(data=>
      <TodoList 
      key={data.id} 
      listData={toDoList} 
      setToDoList={setToDoList} 
      id={data.id} 
      text={data.tdo} />)}
      {toDoList.length===0?<Text style={styles.empty}>Please add your Todo list</Text>:''}
      {toDoList.length!==0?
      <TouchableOpacity onPress={()=>setToDoList([])} style={styles.clearAll}>
      <Text style={styles.clearAllText}>Clear All</Text>
      </TouchableOpacity>
      :''}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listBigContainer:{
    width:'100%',
    display:'flex',
    marginTop:20
  },
  empty:{
    marginLeft:'20%',
    fontSize:22,
    marginTop:'50%',
    color:'#121212',
    fontWeight:'bold',
  },
  clearAll:{
     width:'30%',
     height:40,
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:'red',
     marginLeft:10
  },
  clearAllText:{
    color:'white',
    fontWeight:'bold'
  }
});
