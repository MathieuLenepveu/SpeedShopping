import React from 'react';
import {View,TextInput,  StyleSheet, Text, Pressable} from 'react-native';
import {Button,Input } from 'react-native-elements';
import {useState} from "react";





/*Bouton de validation SIGN UP à gérer en ETAT pour renvoyer vers le profil type CLIENT/COMMERCANT ----- Defaut lien vers Espace COMMERCANT*/


export default function signUpCommercantPage(props) {

  const [signupCommercantEmail, setSignupCommercantEmail] = useState("");
  const [signupCommercantPwd, setSignupCommercantPwd] = useState("");
  const [signupCommercantName, setSignupCommercantName] = useState("");
  const [signupCommercantFirstName, setSignupCommercantFirstName] = useState("");
  const [signupCommercantPhoneNumber, setSignupCommercantPhoneNumber] = useState("");
  const [signupCommercantAddress, setSignupCommercantAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  var handleSubmitSignUp = async () => {
    var res = await fetch("http://172.16.189.14:3000/commercants/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `signupCommercantEmail=${signupCommercantEmail}&signupCommercantPwd=${signupCommercanPwd}&signupCommercantName=${signupCommercantName}&signupCommercantFirstName=${signupCommercantFirstName}&signupCommercantPhonenumber=${signupCommercantPhoneNumber}&signupCommercantAddress=${signupCommercantAddress}`,
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
        onChangeText={(commercantname) => setSignupCommercantName(commercantname)}
        value={signupCommercantName}
        placeholder="Identifiant"
      />

      <TextInput
        style={styles.input}
        onChangeText={(commercantfirstname) => setSignupCommercanFirsttName(commercantfirstname)}
        value={signupCommercantFirstName}
        placeholder="Identifiant"
      />
    
      <TextInput
        style={styles.input}
        onChangeText={(commercantemail) => setSignupCommercantEmail(commercantemail)}
        value={signupCommercantEmail}
        placeholder="Mail"
      />
       <TextInput
        style={styles.input}
        onChangeText={(commercantphonenumber) => setSignupCommercantPhoneNumber(commercantphonenumber)}
        value={signupCommercantPhoneNumber}
        placeholder="Phone Number"
      />
       <TextInput
        style={styles.input}
        onChangeText={(commercantaddress) => setSignupCommercantAddress(commercantaddress)}
        value={signupCommercantAddress}
        placeholder="Adresse"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(password) => setSignupCommercantPwd(passwordd)}
        value={signupCommercantPwd}
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