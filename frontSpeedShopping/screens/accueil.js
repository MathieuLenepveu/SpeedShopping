import React from 'react';
import {View, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';









export default function accueil(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#e67e22'}}>

      <Text>Bienvenue sur Speed Shopping! Tentez l'expérience du local! :) </Text>

      <Button title="J'essaie sans inscription"
        onPress={() => props.navigation.navigate('Home')}
      />
      <Button title="J'ai un compte"
        onPress={() => props.navigation.navigate('SignIn')}
      />
      <Button title="Je m'inscris"
        onPress={() => props.navigation.navigate('SignUp')}
      />
    </View>
  );
 }