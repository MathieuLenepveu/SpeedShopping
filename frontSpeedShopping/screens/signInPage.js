import React from 'react';
import {View, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';






/*Bouton de validation SIGN IN à gérer en ETAT pour renvoyer vers le profil type CLIENT/COMMERCANT ---- DEFAUT LIEN VERS ESPACE CLIENT*/



export default function signInPage(props) {
    return (
      <View>

<Text>PAGE SIGN IN</Text>

<Button title="Entrer"
        onPress={() => props.navigation.navigate('MonProfil')}
      />


</View>

    ) 
  }