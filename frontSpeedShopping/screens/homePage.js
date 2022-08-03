import React from 'react';
import {View, Text, StyleSheet, RecyclerViewBackedScrollView } from 'react-native';
import {Button,Input,ListItem } from 'react-native-elements';

import {Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';







export default function homePage(props) {
  return (
    <View style={styles.container}>
    {/* BOUTON ACCES MON ESPACE  */}
          <Button style={{
            padding:40,

          }}      title="Mon Espace"
                  onPress={() => props.navigation.navigate('MonProfil')}
          />
    {/* INPUT POSITION USER  */}

          <Text style={styles.text}>On va jusqu'où?</Text>
                <Input
                      containerStyle = {{width: '70%'}}
                      inputStyle={styles.input}
                      placeholder='Ta position?'
                  />
                
                <Input
                      containerStyle = {{marginBottom: 2, width: '70%'}}
                      inputStyle={styles.input}
                      placeholder='Ton point de chute?'
                  />
    
      {/* INPUT MOYEN DE LOCOMOTION USER  */} 

        <Text style={styles.text}>On y va comment?</Text>
        
        <View style={{flexDirection:"row"}} >
        <Icon 
                style={styles.icon}
                name='car'
                size={24}
                />
        <Icon
                style={styles.icon}
                name='subway'
                size={24}
                />
        <Icon
                style={styles.icon}
                name='bicycle'
                size={24}
                />
        <Icon
                style={styles.icon}
                name='male'
                size={24}
                />          

        </View>
        
       {/* INPUT DATE ET HEURE DE COLLECT  */}  

          <Text style={styles.text}>On fait ça quand</Text>
      <Input
            containerStyle = {{marginBottom: 25, width: '70%'}}
            inputStyle={styles.input}
            placeholder='Date et Heure de collect'
        />

      {/* INPUT SELECTION DES BESOINS  */}  

        <Text style={styles.text}>On cherche quoi?</Text>
      
        


      <Button style={styles.button}  
              title="START"
              onPress={() => props.navigation.navigate('ConfigurateurItineraire')}
      />
    </View>
  );
 }

 const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
  
  button:{
    paddingTop:35,
    paddingBottom:35,
    backgroundColor: "#f194ff"
    
   
    },

  text:{
    fontSize:20 ,
    color:'blue',
    paddingTop:20,
  
  },

  input:{
fontSize:15,
marginLeft:10,
  },

  icon:{
padding: 10,
color:"#eb4d4b",

  }
  
  })