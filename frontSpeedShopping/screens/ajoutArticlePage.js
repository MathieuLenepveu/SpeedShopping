import React from 'react';
import {View, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';









export default function ajoutArticlePage(props) {
    return (
      <View>

<Button title="Mon Store"
        onPress={() => props.navigation.navigate('MonStore')}
      />

<Button title="Ajouter un Article"
        // onPress={() => props.navigation.navigate('ajoutArticlePage')}
      />
<Text>
PAGE D'AJOUT ARTICLE STORE
</Text>


</View>

    ) 
  }