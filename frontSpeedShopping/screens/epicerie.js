import React from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity,Pressable} from 'react-native';
import {Card, ListItem, Button, Icon, Badge } from 'react-native-elements';




export default function epicerie(props) {


    const epicerie = [{
        nom : 'Farine',
        prix : 6
      },
      {
        nom : 'Purée de Fruits',
        prix : 7
      },
      {
        nom : 'Fruits Secs',
        prix : 8
      },
      {
        nom :'Arômes alimentaires',
        prix : 3
      },
      {
        nom : 'Chips',
        prix : 6
      }
    ]
  
const epicerieList = epicerie.map((article,i) => {
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
      <View style={styles.container} >
<Text style={styles.texttitle} >
L'épicerie place des terreaux
</Text>

{epicerieList}


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
onPress={() => props.navigation.navigate('Paiement')}>
<Text style={styles.text}>Suivant</Text>
        
        </Pressable>
</View>



</View>
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
  
