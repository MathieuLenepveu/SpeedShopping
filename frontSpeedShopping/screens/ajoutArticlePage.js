import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
      setErrorMessage(res.errorMessage);
     
    }
  };
    return (
      <View style={styles.container}>
      <Text>Veuillez vous inscrire : </Text>
      <TextInput
        style={styles.input}
        onChangeText={(article) => setArticle(article)}
        value={article}
        placeholder="Article"
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
    <Pressable style={styles.button} 
       onPress={() => props.navigation.navigate('Home')}>
      <Text style={styles.text}>Suivre l'itinéraire</Text>
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
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    })