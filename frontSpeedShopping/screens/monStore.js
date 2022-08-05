import React from 'react';
import {View, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';



export default function monStore(props) {
    return (
      <View>
<Button title="Mon Store"
        // onPress={() => props.navigation.navigate('monStore')}
      />

<Pressable style={styles.button} 
       onPress={() => props.navigation.navigate('Mes articles')}>
      <Text style={styles.text}>Mes articles</Text>
    </Pressable>

<Text>
PAGE DE VISUALISATION DU STORE COMMERCANT
</Text>


</View>

    ) 
  }