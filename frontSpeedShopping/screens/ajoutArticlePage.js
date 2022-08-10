import React, {useState} from 'react';
import {View, Text,TextInput,StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import {Button,Input } from 'react-native-elements';








export default function ajoutArticlePage(props) {

  const [article, setArticle] = useState('');
  const [price, setPrice] = useState('');
  const [quantite, setQuantite] = useState('');


var handleSubmitSignUp = async () => {
    var res = await fetch("http://172.16.189.14:3000/:commercantId/newarticle", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `article=${article}&price=${price}&quantite=${quantite}`,
    });
    res = await res.json();
    if (res.isLogin) {
      props.navigation.navigate("Home");
    } else {
      alert(Erreur);
     
    }
  };
    return (
      <View style={styles.container}>

<Pressable style={styles.button1} 
       onPress={() => props.navigation.navigate('MonStore')}>
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
        onChangeText={(price) => setPrice(price)}
        value={price}
        placeholder="Prix"
      />
    
      <TextInput
        style={styles.input}
        onChangeText={(quantite) => setQuantite(quantite)}
        value={quantite}
        placeholder="Quantite"
      />
       
      <Pressable style={styles.button} 
       onPress={() => handleSubmitSignUp(article, price, quantite)}>
      <Text style={styles.text}>Ajout d'article</Text>
    </Pressable>

    
    </View>

    )
}
    const styles = StyleSheet.create({
      input: {
        width: 350,
        height: 55,
        backgroundColor: '#C2D4E3',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
      },
      button: {
        padding: 20,
        margin: 10,
        alignItems: "center", 
        justifyContent: "center", 
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#2294DF', 
        width: 200, 
        borderRadius: 8, 
        color: "#FFFFFF"
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


      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    })