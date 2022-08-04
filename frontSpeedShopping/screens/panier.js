import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Button,Input } from 'react-native-elements';




export default function panier(props) {
    return (
      <View style={styles.container} >
<Text>
PANIER CLIENT
</Text>

  
<Pressable style={styles.button} 
onPress={() => props.navigation.navigate('Paiement')}>
<Text style={styles.text}>Payer</Text>
        
        </Pressable>

</View>

    ) 
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center", 
    },
    text: {
      fontSize: 16, 
      color: 'white', 
    },
    button: {
      padding: 20,
      margin: 10,
      alignItems: "center", 
      justifyContent: "center", 
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#052640', 
      width: 200, 
      borderRadius: 8, 
      color: "#FFFFFF"
    }
  });