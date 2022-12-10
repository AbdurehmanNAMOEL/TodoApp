import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import InputField from '../components/InputField'
const ToDo = ({handleTodo,setInput}) => {
  return (
    <View style={styles.todoContainer}>
     <InputField 
      handleTodo={handleTodo} 
      setInput={setInput}/>
    </View>
  )
}

const styles=StyleSheet.create({
   todoContainer:{
    width:'98%',
    height:100,
    shadowColor:'#121212',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderColor:"#121212",
    borderWidth:1,
    borderRadius:10,
    marginTop:100
   }
})
export default ToDo