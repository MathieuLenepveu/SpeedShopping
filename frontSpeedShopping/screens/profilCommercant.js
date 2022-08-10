import React from 'react';
import {View, Text, Pressable,TouchableOpacity,StyleSheet} from 'react-native';
import {Button,Input } from 'react-native-elements';









export default function profilCommercant() {
    return (
      <View style={styles.container}>
 <TouchableOpacity
        style={styles.button10}
        // onPress={() => props.navigation.navigate('Home')}
      >
        <Text style={styles.text}>MES INFORMATIONS PERSONELLES</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button10}
        // onPress={() => props.navigation.navigate('Home')}
      >
        <Text style={styles.text}>MON TABLEAU DE BORD</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button10}
        // onPress={() => props.navigation.navigate('Home')}
      >
        <Text style={styles.text}>CONTACTER LA PLATEFORME</Text>
      </TouchableOpacity>

</View>

    ) 
  }

  const styles = StyleSheet.create({

    container: {
      flex:1,
      backgroundColor:'#5A7E95',
      alignItems: 'center',
      justifyContent:'space-evently',
    },
  
    header:{
  marginTop: 10,
  
    },
  
    bloc:{
  marginTop: 15,
  marginBottom:15,
  alignItems :'center',
    },
    
    button10:{
      height :150,
      width : "90%",
      borderWidth : 2 ,
      borderColor : 'black',
      borderRadius : 30,
      padding:20,
      margin : 10,
      backgroundColor :'#2294DF',
      alignItems : 'center',
      justifyContent:'center',
      
      },
  
      button2:{
        borderWidth : 2 ,
        borderColor : 'black',
        borderRadius : 5,
        padding:2,
        margin :1,
        backgroundColor :'#2294DF',
        alignItems : 'center',
        
        
        },
  
    text:{
      fontSize:30 ,
      color:'black',
      justifyContent :'center',
      textAlign:'center',
     
      margin :0,
    
    },
  
    input:{
  fontSize:10,
  margin:5,
  padding: 10,
  borderWidth : 2,
  borderColor : "black",
  width : "100%",
  height : 20,
  borderRadius : 10,
  textAlign : "center",
  justifyContent : "center",
  backgroundColor: '#93CAEF',
    },
  
    icon:{
  padding: 10,
  margin:10,
  color:"#2E43D8",
  
    },
    
    
    })