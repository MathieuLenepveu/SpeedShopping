import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Button,Input, withTheme } from 'react-native-elements';




export default function preCommandePage(props) {
    return (
      <View style={styles.container} >
<Text style={styles.texttitle} >
PAGE DE PRECOMMANDE
</Text>

<Pressable style={styles.button} 
onPress={() => props.navigation.navigate('Panier')}>
<Text style={styles.text}>Panier</Text>
       
       </Pressable>

<Pressable style={styles.button} 
onPress={() => props.navigation.navigate('Paiement')}>
<Text style={styles.text}>Je verrai sur place</Text>
        
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
      backgroundColor: '#2294DF', 
      width: 200, 
      borderRadius: 8, 
      color: "#FFFFFF"
    }, 
    texttitle: {
      color: '#052640', 
    }
  });
  