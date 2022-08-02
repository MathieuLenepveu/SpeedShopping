import React from 'react';
import {View, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';









export default function monStore(props) {
    return (
      <View>
<Button title="Mon Store"
        // onPress={() => props.navigation.navigate('monStore')}
      />

<Button title="Ajouter un Article"
        onPress={() => props.navigation.navigate('MesArticles')}
      />

<Text>
PAGE DE VISUALISATION DU STORE COMMERCANT
</Text>


</View>

    ) 
  }