import React from 'react';
import {View,TextInput, Pressable,  StyleSheet, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState} from "react";


/*Bouton de validation SIGN IN à gérer en ETAT pour renvoyer vers le profil type CLIENT/COMMERCANT ---- DEFAUT LIEN VERS ESPACE CLIENT*/



export default function signInPage(props) {


  const [signinEmail, setSigninEmail] = useState("");
  const [signinPwd, setSigninPwd] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  var handleSubmitSignIn = async () => {
    var res = await fetch("http://172.16.189.14:3000/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${signinEmail}&pwd=${signinPwd}`,
    });
    res = await res.json();
    if (res.isLogin) {
      AsyncStorage.setItem("userID", res.userID);
      props.navigation.navigate("Home");
    } else {
      setErrorMessage(res.errorMessage);
     
    }
  };



    return (

  

      <View style={styles.container}>
      <Text>Veuillez dévoiler votre identité : </Text>
      <TextInput
        style={styles.input}
        onChangeText={(email) => setSigninEmail(email)}
        value={signinEmail}
        placeholder="geoffroy.goirand@gmail.com"
              />
     
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(pwd) => setSigninPwd(pwd)}
        value={signinPwd}
        placeholder="Password"
      />
     
  
      <Pressable style={styles.button} 
       onPress={() => handleSubmitSignIn()}>
      <Text style={styles.text}>Sign In</Text>
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

