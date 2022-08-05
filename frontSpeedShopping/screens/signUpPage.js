import React from 'react';
import {View,TextInput,  StyleSheet, Text, Pressable} from 'react-native';
import {Button,Input } from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState} from "react";





/*Bouton de validation SIGN UP à gérer en ETAT pour renvoyer vers le profil type CLIENT/COMMERCANT ----- Defaut lien vers Espace COMMERCANT*/


export default function signUpPage(props) {

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPwd, setSignupPwd] = useState("");
  const [signupUserName, setSignupUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  var handleSubmitSignUp = async () => {
    var res = await fetch("http://172.16.189.14:3000/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${signupEmail}&pwd=${signupPwd}&username=${signupUserName}`,
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
      <Text>Veuillez vous inscrire : </Text>
      <TextInput
        style={styles.input}
        onChangeText={(username) => setSignupUserName(username)}
        value={signupUserName}
        placeholder="geoffroy.goirand"
      />
    
      <TextInput
        style={styles.input}
        onChangeText={(email) => setSignupEmail(email)}
        value={signupEmail}
        placeholder="geoffroy.goirand@gmail.com"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(pwd) => setSignupPwd(pwd)}
        value={signupPwd}
        placeholder="Password"
      />
      <Pressable style={styles.button} 
       onPress={() => handleSubmitSignUp()}>
      <Text style={styles.text}>Sign Up</Text>
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
      button : {
        color: '#052640', 
      }, 
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    })