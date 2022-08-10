
import React, {useState} from 'react';
import {View, Text,TextInput,StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import {Button,Input } from 'react-native-elements';








export default function ajoutArticlePage(props) {

  
    return (
      <View style={styles.container}>

<Pressable style={styles.button1}>
      <Text style={styles.text}>Retour au store</Text>
    </Pressable>


      <Text>Renseigner votre nouvel article : </Text>
      <TextInput
        style={styles.input}
        onChangeText={(article) => setArticle(article)}
        value={article}
        placeholder="Article"
      />

<TextInput
        style={styles.input}
        placeholder="Unité de vente"
      />

      <TextInput
        style={styles.input}
        onChangeText={(price) => setprice(price)}
        value={price}
        placeholder="Prix"
      />
    
      <TextInput
        style={styles.input}
        onChangeText={(quantite) => setquantite(quantite)}
        value={quantite}
        placeholder="Quantite"
      />
       
      <Pressable style={styles.button} 
       onPress={() => handleSubmitSignUp()}>
      <Text style={styles.text}>Ajout d'article</Text>
    </Pressable>

    
    </View>

    )
}











const styles = StyleSheet.create({

    container: {
      flex:1,
      backgroundColor:'#fff',
      alignItems: 'center',
      justifyContent:'space-around',
    },
  
    header:{
  marginTop: 10,
    },
  
    bloc:{
  margin:30,
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
  
    text:{
      fontSize:20 ,
      color:'blue',
     
      margin :0,
    
    },
  
    input:{
  fontSize:10,
  margin:5,
  padding: 10,
  borderWidth : 2,
  borderColor : "violet",
  width : "100%",
  height : 20,
  borderRadius : 10,
  textAlign : "center",
  
    },
  
    icon:{
  padding: 10,
  margin:10,
  color:"#eb4d4b",
  
    },
    
    
    })