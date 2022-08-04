import React from 'react';
import {View, Text,TextInput, StyleSheet, RecyclerViewBackedScrollView,TouchableOpacity,Pressable } from 'react-native';
import {Button,Input } from 'react-native-elements';

import {Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';







export default function homePage(props) {

  return (
  <View style={styles.container} >


      <View style={styles.header}>

{/* BOUTON ACCES MON ESPACE  */}

<TouchableOpacity
        style={styles.button1}
        onPress={() => props.navigation.navigate('MonProfil')}
      >
        <Text>MON ESPACE</Text>
      </TouchableOpacity>

      </View>
    

      <View style={styles.bloc}>
      {/* INPUT POSITION USER  */}

      <Text style={styles.text}>On va jusqu'où?</Text>
                <TextInput style={styles.input}
                            placeholder='Ta position ?'
                  />
                
                <TextInput style={styles.input}
                            placeholder='Ton point de chute ?'
                  />
      
      </View>     
      <View style={styles.bloc}>

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


      </View>
    <View style={styles.bloc}>

 
       {/* INPUT DATE ET HEURE DE COLLECT  */}  

       <Text style={styles.text}>On fait ça quand ?</Text>
          <TextInput style={styles.input}
                    placeholder='Date et Heure de collect ?'
                  />

    </View>
    <View style={styles.bloc}>
       
{/* INPUT SELECTION DES BESOINS  */}  

<Text style={styles.text}>On cherche quoi?</Text>

<View style={[{flexDirection:"row"}, {marginTop :15} ]}>
<TouchableOpacity
        style={styles.button2}
        onPress={undefined}
      >
        <Text>Boucher</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={undefined}      >
        <Text>Boulanger</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={undefined}      >
        <Text>Primeur</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={undefined}      >
        <Text>Fleuriste</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={undefined}      >
        <Text>Tabac</Text>
      </TouchableOpacity>

</View>
<View style={[{flexDirection:"row"}, {marginTop :15} ]}>
<TouchableOpacity
        style={styles.button2}
        onPress={undefined}
      >
        <Text>Poissonerie</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={undefined}      >
        <Text>Droguerie</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={undefined}      >
        <Text>Epicerie</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={undefined}      >
        <Text>Patisserie</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={undefined}      >
        <Text>Autre</Text>
      </TouchableOpacity>

</View>




    </View>
      
      
<View style={styles.bloc}>


<TouchableOpacity
        style={styles.button1}
        onPress={() => props.navigation.navigate('ConfigurateurItineraire')}
      >
        <Text>START !</Text>
      </TouchableOpacity>

</View>
    </View>
  );
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