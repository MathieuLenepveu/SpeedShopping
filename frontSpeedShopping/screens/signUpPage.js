import React from 'react';
import {View,TextInput,  StyleSheet, Text, Pressable} from 'react-native';
import {Button,Input } from 'react-native-elements';
import {useState} from "react";





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
      <View style={styles.container}>
      <Text>Veuillez vous inscrire : </Text>
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