
import React from 'react';
import {View, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';



export default function paiement() {
    return (
      <View>

  

<Text>
RENVOI SIGN IN ou SIGN UP si pas ok
</Text>

<Text>
PAGE DE CHARGEMENT DE l'OUTIL DE PAIEMENT
</Text>


</View>

    ) 
  }




import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  
  return (
    <View style={styles.container}>

 <Pressable style={{ width: 80, height: 30, backgroundColor: "skyblue", borderRadius: 6, alignItems: 'center',
    justifyContent: 'center'}} >
      <Text style={styles.text}>Payement</Text>
    </Pressable>

</View>

);
}

  
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent:'center',
    
  },
  text: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#052640',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
