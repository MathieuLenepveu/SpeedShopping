import React from 'react';
import {View, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';









export default function panier(props) {
    return (
      <View>
<Text>
PANIER CLIENT
</Text>


<Button title="PASSER COMMANDE"
        onPress={() => props.navigation.navigate('Paiement')}
      />

</View>

    ) 
  }