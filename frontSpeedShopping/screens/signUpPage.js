import React from 'react';
import {View, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';






/*Bouton de validation SIGN UP à gérer en ETAT pour renvoyer vers le profil type CLIENT/COMMERCANT ----- Defaut lien vers Espace COMMERCANT*/


export default function signUpPage(props) {
    return (
      <View>
<Text>
PAGE SIGN UP
</Text>


<Button title="Enregistrer"
        onPress={() => props.navigation.navigate('MonStore')}
      />

</View>

    ) 
  }