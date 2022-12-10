import React, { useState } from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Checkbox from 'expo-checkbox';
const TodoList = ({text,listData,id,setToDoList}) => {
   const [isChecked,setChecked]=useState(false)
   const handleDelete=()=>{
    const newDataList=listData.filter(data=>data.id!==id)
    console.log(newDataList);
    setToDoList(newDataList) 
   }
  return (
    <View style ={styles.listContainer}>
    <Checkbox 
     style={styles.checkBox} 
     value={isChecked} 
     onValueChange={()=>setChecked(pre=>!pre)}
    />
    <Text style={[styles.listText,{textDecorationLine:`${isChecked?'line-through':'none'}`}]}>{text}</Text>
    <TouchableOpacity onPress={handleDelete} style={styles.deleteBtn} disabled={!isChecked}>
        <Text style={styles.deleteBtnText}>Delete</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    listContainer:{
       width:'95%',
       height:50,
       marginTop:10,
       marginBottom:10,
       backgroundColor:'#121212',
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       borderRadius:4,
       marginLeft:'2.5%',
       flexDirection:'row'
    },
    listText:{
        marginLeft:10,
        fontWeight:'bold',
        color:'white',
        width:'72%',
        textDecorationColor:'red'
    },
    deleteBtn:{
        backgroundColor:'red',
        width:'20%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    deleteBtnText:{
        color:'white',
        fontWeight:'bold',
    },
    checkBox:{
        marginLeft:5
    },
})
export default TodoList