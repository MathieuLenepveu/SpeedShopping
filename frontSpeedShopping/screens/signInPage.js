import React from 'react';
import {View,TextInput, Pressable,  StyleSheet, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';






/*Bouton de validation SIGN IN à gérer en ETAT pour renvoyer vers le profil type CLIENT/COMMERCANT ---- DEFAUT LIEN VERS ESPACE CLIENT*/



export default function signInPage(props) {
    return (

  

      <View style={styles.container}>
      <Text>Veuillez dévoiler votre identité : </Text>
      <TextInput
        style={styles.input}
        placeholder='Username'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('username', val)}

      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('password', val)}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('email', val)}
      />
      <TextInput
        style={styles.input}
        placeholder='Phone Number'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('phone_number', val)}
      />
  
      <Pressable style={styles.button} 
       onPress={() => props.navigation.navigate('Mon Profil')}>
      <Text style={styles.text}>Sign In</Text>
    </Pressable>
    </View>

    )
}
    const styles = StyleSheet.create({
      input: {
        width: 350,
        height: 55,
        backgroundColor: '#C2D4E3',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80, 
        height: 55, 
        backgroundColor: '#C2D4E3', 
        borderRadius: 8, 
      }, 
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    })

