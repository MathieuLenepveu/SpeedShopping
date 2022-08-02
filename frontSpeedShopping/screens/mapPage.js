import React from 'react';
import {View, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';









export default function mapPage(props) {
    return (
      <View>
<Text>
PAGE DE CHARGEMENT DE L'ITINERAIRE INITIAL
</Text>
<Button title="PRE COMMANDE"
        onPress={() => props.navigation.navigate('PreCommande')}
      />
<Button title="GO"
        onPress={() => props.navigation.navigate('Navigation')}
      />


</View>

    ) 
  }