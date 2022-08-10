import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Button,Input, withTheme } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';



export default function preCommandePage(props) {
    return (
      <LinearGradient
    // Background Linear Gradient
     colors={["#d1e8e8", "#1E90FF"]}
    style={{flex: 1,justifyContent:'center',alignItems:'center'}}
    start = {{ X: -1, Y: 0}}
    end= {{ x:1, y: 0.3}}
  >
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

</LinearGradient>

    ) 
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center", 
      backgroundColor: '#5A7E95',
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
  