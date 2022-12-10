import React from 'react'
import {View,StyleSheet,TextInput,Text,TouchableOpacity} from 'react-native'
const InputField = ({handleTodo,setInput}) => {
  return (
    <View style={styles.inputFieldContainer}>
     <TextInput style={styles.inputFieldStyle} placeholder='Enter your todo....' onChangeText={(e)=>setInput(e)}/>
     <TouchableOpacity onPress={handleTodo} style={styles.btn}>
        <Text style={styles.btnText}>Enter</Text>
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    inputFieldContainer:{
     width:'80%',
     height:42,
     display:'flex',
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     borderColor:'#121212',
     borderWidth:2,
       
    },
    btn:{
        width:100,
        height:40,
        backgroundColor:"#121212",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    btnText:{
        color:'white',
        fontWeight:'bold',
    },
    inputFieldStyle:{
        width:'69%',
        padding:6
    }
})
export default InputField