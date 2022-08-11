import React from 'react';

import {View, Text, Image, StyleSheet,TouchableOpacity,Pressable} from 'react-native';
import {Button,Input, withTheme,Card, ListItem, Icon, Badge  } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';




export default function preCommandePage(props) {

  // nom:'Maison Farine',

  const boulangerie = [{
      nom : 'Pain au chocolat',
      prix : 1
    },
    {
      nom : 'Croissant',
      prix : 0.80
    },
    {
      nom : 'Baguette tradition',
      prix : 0.80
    },
    {
      nom : 'Pain au blé complet',
      prix : 3
    },{
      nom : 'Pain au levin',
      prix : 2
    }

  ]
  

const boulangeList = boulangerie.map((article,i) => {
  return (

            
            <View key={i} style={{width:'90%',marginBottom:10, height:40,justifyContent:'space-between',alignItems:'center', display:'flex',flexDirection:'row', borderWidth:3,borderColor:'black',borderRadius:10,height:80}}>

<Text style={{marginLeft:40, width:'30%'}}>{article.nom}</Text>
<Text  >{article.prix} € </Text>
<TouchableOpacity

        style={{

          marginRight:30,
            borderWidth: 2 ,
            borderColor : '#1A33A0',
            borderRadius : 10,
            alignItems : 'center',
            justifyContent:'center',
            padding:10,
            height:50,
                    }}
        onPress={()=> {}}
      >
        <Text style={styles.texte}>ADD</Text>
      </TouchableOpacity>

</View>
  )
})


    return (
      <LinearGradient
    // Background Linear Gradient
     colors={["#d1e8e8", "#1E90FF"]}
    style={{flex: 1,justifyContent:'center',alignItems:'center'}}
    start = {{ X: -1, Y: 0}}
    end= {{ x:1, y: 0.3}}
  >
<Text style={styles.texttitle} >
Maison Farine
</Text>

{boulangeList}


<View style={{display:'flex', flexDirection:'row', position:'absolute', bottom:40 , width:'80%',justifyContent:'space-between'}}>
<Pressable style={{
                borderWidth: 2 ,
                borderColor : '#1A33A0',
                borderRadius : 10,
                alignItems : 'center',
                justifyContent:'center',
                padding:10,
                width:'40%',
                height:50,
              }}  
onPress={() => props.navigation.navigate('Panier')}>
<Text style={styles.text}>Panier</Text>
       
       </Pressable>

<Pressable  style={{
                borderWidth: 2 ,
                borderColor : '#1A33A0',
                borderRadius : 10,
                alignItems : 'center',
                justifyContent:'center',
                padding:10,
                height:50,
                width:'40%',

              }}  
onPress={() => props.navigation.navigate('poissonerie')}>
<Text style={styles.text}>Suivant</Text>
        
        </Pressable>

        </View>

</LinearGradient>


    ) 
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center", 
    },
    button: {
      padding: 20,
      margin: 10,
      alignItems: "center", 
      justifyContent: "center", 
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#2294DF', 
      width:'40%',
      borderRadius: 8, 
      color: "#FFFFFF"
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
    texttitle: {
      color: '#052640', 
      position:'absolute',
      top:40,
      fontSize: 25
    }
  });
  
