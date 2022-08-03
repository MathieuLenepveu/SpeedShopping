import React from 'react';
import {View, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';









export default function preCommandePage(props) {
    return (
      <View>
<Text>
PAGE DE PRECOMMANDE
</Text>

<Button title="PANIER"
        onPress={() => props.navigation.navigate('Panier')}
      />

<Button title="JE VERRAI SUR PLACE"
        onPress={() => props.navigation.navigate('Paiement')}
      />

</View>

    ) 
  }