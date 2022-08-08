import React from 'react';
import {View,ScrollView, Text,StyleSheet, Pressable,TouchableOpacity,Image} from 'react-native';
import {Button,Input,Card,ListItem,Icon } from 'react-native-elements';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'






export default function monStore(props) {
    return (
      <View style={styles.container}>


<Pressable style={styles.button1} 
       onPress={() => props.navigation.navigate('MesArticles')}>
      <Text style={styles.text}>Ajouter des articles</Text>
    </Pressable>

  <ScrollView>

  <Card
  width='100%'
  >
  <Text style={styles.text}>
    LA BAGUETTE TRADITION
  </Text>
  <Image source={require('../assets/baguette.jpeg')} style={{ width: 300, height: 200 }}/>

  <View style={[{flexDirection:"row"}, {margin:15}, {justifyContent:'space-between'}]}>
    
    <TouchableOpacity style={styles.button2}>
    <Text>Stock : 3</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2}>
    <Text> Pièce(s) </Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2}>
    <Text> 1€</Text>
  </TouchableOpacity>

  </View>

  <TouchableOpacity style={styles.button1}>  
    <Text>SUPPRIMER</Text>
  </TouchableOpacity>

</Card>
<Card
  width='100%'
  >
  <Text style={styles.text}>
    LE CROISSANT
  </Text>
  <Image source={require('../assets/croissant.jpeg')} style={{ width: 300, height: 200 }}/>

  <View style={[{flexDirection:"row"}, {margin:15}, {justifyContent:'space-between'}]}>
    
    <TouchableOpacity style={styles.button2}>
    <Text>Stock : 50</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2}>
    <Text> Pièce(s) </Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2}>
    <Text> 0,9€</Text>
  </TouchableOpacity>

  </View>

  <TouchableOpacity style={styles.button1}>  
    <Text>SUPPRIMER</Text>
  </TouchableOpacity>

</Card>
<Card
  width='100%'
  >
  <Text style={styles.text}>
    LA PAIN AU CHOCOLAT
  </Text>
  <Image source={require('../assets/painAuChocolat.jpeg')} style={{ width: 300, height: 200 }}/>

  <View style={[{flexDirection:"row"}, {margin:15}, {justifyContent:'space-between'}]}>
    
    <TouchableOpacity style={styles.button2}>
    <Text>Stock : 35</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2}>
    <Text> Pièce(s) </Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2}>
    <Text> 1,1€</Text>
  </TouchableOpacity>

  </View>

  <TouchableOpacity style={styles.button1}>  
    <Text>SUPPRIMER</Text>
  </TouchableOpacity>

</Card>
<Card
  width='100%'
  >
  <Text style={styles.text}>
    PIZZA
  </Text>
  <Image source={require('../assets/pizza.jpeg')} style={{ width: 300, height: 200 }}/>

  <View style={[{flexDirection:"row"}, {margin:15}, {justifyContent:'space-between'}]}>
    
    <TouchableOpacity style={styles.button2}>
    <Text>Stock : 6</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2}>
    <Text> Part(s) </Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2}>
    <Text> 2€</Text>
  </TouchableOpacity>

  </View>

  <TouchableOpacity style={styles.button1}>  
    <Text>SUPPRIMER</Text>
  </TouchableOpacity>

</Card>
<Card
  width='100%'
  >
  <Text style={styles.text}>
   FARINE
  </Text>
  <Image source={require('../assets/farine.jpeg')} style={{ width: 300, height: 200 }}/>

  <View style={[{flexDirection:"row"}, {margin:15}, {justifyContent:'space-between'}]}>
    
    <TouchableOpacity style={styles.button2}>
    <Text>Stock : 20</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2}>
    <Text> Kg(s) </Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2}>
    <Text> 0,5€</Text>
  </TouchableOpacity>

  </View>

  <TouchableOpacity style={styles.button1}>  
    <Text>SUPPRIMER</Text>
  </TouchableOpacity>

</Card>

  </ScrollView>



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