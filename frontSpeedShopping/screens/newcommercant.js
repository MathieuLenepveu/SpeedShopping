import React from 'react';
import {View,TextInput,  StyleSheet, Text, Pressable} from 'react-native';
import {Button,Input } from 'react-native-elements';
import {useState} from "react";





/*Bouton de validation SIGN UP à gérer en ETAT pour renvoyer vers le profil type CLIENT/COMMERCANT ----- Defaut lien vers Espace COMMERCANT*/


export default function signUpCommercantPage(props) {

  const [SignupCommercantEmail, setSignupCommercantEmail] = useState("");
  const [SignupCommercantType, setSignupCommercantType] = useState("");
  const [SignupCommercantPassword, setSignupCommercantPassword] = useState("");
  const [SignupCommercantName, setSignupCommercantName] = useState("");
  const [SignupCommercantFirstName, setSignupCommercantFirstName] = useState(""); 
  const [SignupCommercantAddress, setSignupCommercantAddress] = useState("");
  const [SignupCommercantEnseignecommerciale, setSignupCommercantEnseignecommerciale] = useState("");
  


  var handleCommercantSubmitSignUp = async () => {
    var res = await fetch("http://172.16.189.16:3000/commercants/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `commercantname=${SignupCommercantName}&commercantfirstname=${SignupCommercantFirstName}&commercantemail=${SignupCommercantEmail}&commercantaddress=${SignupCommercantAddress}&commercanttype=${SignupCommercantType}&commercantenseignecommerciale=${SignupCommercantEnseignecommerciale}&commercantpassword=${SignupCommercantPassword}`,
    });
    res = await res.json();
    if (res.isLogin) {
      props.navigation.navigate("Home");
    } else {
      alert("Tu n as pas réussi à te connecter"); 
    }
  };

    return (
      <View style={styles.container}>
      <Text>Veuillez vous inscrire : </Text>
      <TextInput
        style={styles.input}
        onChangeText={(commercantname) => setSignupCommercantName(commercantname)}
        value={SignupCommercantName}
        placeholder="Identifiant"
      />
      <TextInput
        style={styles.input}
        onChangeText={(commercantfirstname) => setSignupCommercantFirstName(commercantfirstname)}
        value={SignupCommercantFirstName}
        placeholder="FirstName"
      />
    
      <TextInput
        style={styles.input}
        onChangeText={(email) => setSignupCommercantEmail(email)}
        value={SignupCommercantEmail}
        placeholder="Mail"
      />
       <TextInput
        style={styles.input}
        onChangeText={(address) => setSignupCommercantAddress(address)}
        value={SignupCommercantAddress}
        placeholder="Adresse"
      />
        <TextInput
        style={styles.input}
        onChangeText={(enseignecommerciale) => setSignupCommercantEnseignecommerciale(enseignecommerciale)}
        value={SignupCommercantEnseignecommerciale}
        placeholder="Enseigne commerciale"
      />
      <TextInput
        style={styles.input}
        onChangeText={(type) => setSignupCommercantType(type)}
        value={SignupCommercantType}
        placeholder="Type de commerce"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(password) => setSignupCommercantPassword(password)}
        value={SignupCommercantPassword}
        placeholder="Password"
      />
      <Pressable style={styles.button} 
       onPress={() => handleCommercantSubmitSignUp()}>
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