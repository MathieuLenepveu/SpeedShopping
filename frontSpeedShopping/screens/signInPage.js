import React from 'react';
import {View,TextInput, Pressable,  StyleSheet, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState} from "react";
import { LinearGradient } from 'expo-linear-gradient';


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

  

      <LinearGradient
      // Background Linear Gradient
      colors={["#d1e8e8", "#1E90FF"]}
      style={{flex: 1,justifyContent:'center',alignItems:'center'}}
      start = {{ X: -1, Y: 0}}
      end= {{ x:1, y: 0.3}}
    >
      <Text style={styles.text3}>Veuillez dévoiler votre identité : </Text>
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
    </LinearGradient>

    )
}
    const styles = StyleSheet.create({
      input: {
        width: 350,
        height: 55,
        backgroundColor: 'white',
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
      }, 
      text3: {
        color: '#0000FF', 
      }
    })

