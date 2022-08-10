import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Button,Input } from 'react-native-elements';









export default function profilClient() {
    return (
      
<View style={styles.container}>
 <TouchableOpacity
        style={styles.button1}
        // onPress={() => props.navigation.navigate('Home')}
      >
        <Text>Mes informations</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button1}
        // onPress={() => props.navigation.navigate('Home')}
      >
        <Text>Mon Tableau de Bord</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button1}
        // onPress={() => props.navigation.navigate('Home')}
      >
        <Text>Contacter la plateforme</Text>
      </TouchableOpacity>

</View>

    ) 
  }

  const styles = StyleSheet.create({

    container: {
      flex:1,
      backgroundColor:'#5A7E95',
      alignItems: 'center',
      justifyContent:'space-around',
    },
  
    header:{
  marginTop: 10,
  
    },
  
    bloc:{
  marginTop: 15,
  marginBottom:15,
  alignItems :'center',
    },
    
    button1:{
      borderWidth : 2 ,
      borderColor : 'black',
      borderRadius : 100,
      padding:15,
      margin : 20,
      backgroundColor :'#2294DF',
      alignItems : 'center',
      
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
      fontSize:20 ,
      color:'black',
     
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