import React from 'react';
import {View,TextInput,  StyleSheet, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';






/*Bouton de validation SIGN UP à gérer en ETAT pour renvoyer vers le profil type CLIENT/COMMERCANT ----- Defaut lien vers Espace COMMERCANT*/


export default function signUpPage(props) {
    return (
      <View style={styles.container}>
      <Text>Veuillez vous inscrire : </Text>
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
      <Button
        style={styles.button}
        title='Sign Up'
        onPress={() => props.navigation.navigate('MonStore')}
      />
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
      button : {
        color: '#052640', 
      }, 
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    })