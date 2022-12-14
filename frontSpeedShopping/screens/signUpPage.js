import React from 'react';
import {View,TextInput,  StyleSheet, Text, Pressable} from 'react-native';
import {Button,Input } from 'react-native-elements';
import {useState} from "react";
import { LinearGradient } from 'expo-linear-gradient';




/*Bouton de validation SIGN UP à gérer en ETAT pour renvoyer vers le profil type CLIENT/COMMERCANT ----- Defaut lien vers Espace COMMERCANT*/


export default function signUpPage(props) {

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPwd, setSignupPwd] = useState("");
  const [signupUserName, setSignupUserName] = useState("");
  const [signupPhoneNumber, setSignupPhoneNumber] = useState("");
  const [signupAddress, setSignupAddress] = useState("");
  const [signupFirstName, setSignupFirstName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  var handleSubmitSignUp = async () => {
    var res = await fetch("http://172.16.189.11:3000/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `firstname=${signupFirstName}&email=${signupEmail}&pwd=${signupPwd}&username=${signupUserName}&phonenumber=${signupPhoneNumber}&address=${signupAddress}`,
    });
    res = await res.json();
    if (res.isLogin) {
      props.navigation.navigate("Home");
    } else {
      alert("Vous n'êtes pas connecté"); 
     
    }
  };
    return (
      <LinearGradient
      // Background Linear Gradient
      colors={["#d1e8e8", "#1E90FF"]}
      style={{flex: 1,justifyContent:'space-between',alignItems:'center'}}
      start = {{ X: -1, Y: 0}}
      end= {{ x:1, y: 0.3}}
    >
      <Text style={styles.text3}>Veuillez vous inscrire : </Text>
      <TextInput
        style={styles.input}
        onChangeText={(username) => setSignupUserName(username)}
        value={signupUserName}
        placeholder="Nom"
      />
      <TextInput
        style={styles.input}
        onChangeText={(firstname) => setSignupFirstName(firstname)}
        value={signupFirstName}
        placeholder="Prénom"
      />
    
      <TextInput
        style={styles.input}
        onChangeText={(email) => setSignupEmail(email)}
        value={signupEmail}
        placeholder="Mail"
      />
       <TextInput
        style={styles.input}
        onChangeText={(phonenumber) => setSignupPhoneNumber(phonenumber)}
        value={signupPhoneNumber}
        placeholder="Phone Number"
      />
       <TextInput
        style={styles.input}
        onChangeText={(address) => setSignupAddress(address)}
        value={signupAddress}
        placeholder="Adresse"
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
    <Pressable style={styles.button} 
       onPress={() => props.navigation.navigate('Home')}>
      <Text style={styles.text}>Continuer sans s'enregistrer</Text>
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