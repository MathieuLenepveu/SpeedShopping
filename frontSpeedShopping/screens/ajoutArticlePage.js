import React, {useState} from 'react';
import {View, Text,StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import {Button,Input } from 'react-native-elements';








export default function ajoutArticlePage(props) {

  const [article, setArticle] = useState('');
  const [price, setPrice] = useState('');
  const [quantite, setQuantite] = useState('');
    return (

      <View>

      <Pressable style={styles.button1} 
       onPress={() => props.navigation.navigate('MonStore')}>
      <Text style={styles.text}>Retour au Store</Text>
    </Pressable>

    <View>
    <Input
    
        containerStyle={{ marginBottom: 10, width: '70%' }}
        inputStyle={{ marginLeft: 10 }}
        placeholder='ARTICLE'
        
        onChangeText={(val) => setArticle(val)}
      />

<Input
        containerStyle={{ marginBottom: 10, width: '70%' }}
        inputStyle={{ marginLeft: 10 }}
        placeholder='Unité de vente'
        
        // onChangeText={(val) => setArticle(val)}
      />

<Input
        containerStyle={{ marginBottom: 10, width: '70%' }}
        inputStyle={{ marginLeft: 10 }}
        placeholder='Prix unitaire'
      
        onChangeText={(val) => setPrice(val)}
      />

<Input
        containerStyle={{ marginBottom: 10, width: '70%' }}
        inputStyle={{ marginLeft: 10 }}
        placeholder='Quantité'
      
        onChangeText={(val) => setQuantite(val)}
      />

<Pressable style={styles.button2}
      //  onPress={() => props.navigation.navigate('MesArticles')}
       >
      <Text style={styles.text}>Joindre une image</Text>
    </Pressable>

    </View>




<TouchableOpacity 
style={styles.button1}

        onPress={async () => {
         
            var rawResponse = await fetch("http://192.168.248.50:3000/myarticles", {
              method: 'POST',
              body: data
            });
            var response = await rawResponse.json();
            if (!response.error) {
              props.onSnap(response);
            }
          
          }
        }>
          <Text>Ajouter au STORE</Text>

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