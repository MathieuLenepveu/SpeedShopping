import React from 'react';
import {View,TextInput,  StyleSheet, Text, Pressable} from 'react-native';
import {Button,Input } from 'react-native-elements';
import {useState} from "react";
import { LinearGradient } from 'expo-linear-gradient';

/*Bouton de validation SIGN UP à gérer en ETAT pour renvoyer vers le profil type CLIENT/COMMERCANT ----- Defaut lien vers Espace COMMERCANT*/


export default function signUpCommercantPage(props) {

  const [SignupCommercantEmail, setSignupCommercantEmail] = useState("");
  const [SignupCommercantType, setSignupCommercantType] = useState("");
  const [SignupCommercantPassword, setSignupCommercantPassword] = useState("");
  const [SignupCommercantName, setSignupCommercantName] = useState("");
  const [SignupCommercantFirstName, setSignupCommercantFirstName] = useState("")
  const [SignupCommercantAddress, setSignupCommercantAddress] = useState("");
  const [SignupCommercantEnseignecommerciale, setSignupCommercantEnseignecommerciale] = useState("");
  


  var handleCommercantSubmitSignUp = async (name,firstname,email,adresse,enseignecommerciale,type,password) => {
    var res = await fetch("http://172.20.10.2:3000/commercants/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `commercantname=${name}&commercantfirstname=${firstname}&commercantemail=${email}&commercantaddress=${adresse}&commercanttype=${type}&commercantenseignecommerciale=${enseignecommerciale}&commercantpassword=${password}`,
    });
    res = await res.json();
    if (res.isLogin) {
      props.navigation.navigate("Home");
    } else {
      alert("Tu n as pas réussi à te connecter"); 
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
       onPress={() => handleCommercantSubmitSignUp(SignupCommercantName,SignupCommercantFirstName,SignupCommercantEmail,SignupCommercantAddress,SignupCommercantEnseignecommerciale,SignupCommercantType,SignupCommercantPassword)}>
      <Text style={styles.text}>Sign Up</Text>
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
        color: '#4682B4', 
      }
    })