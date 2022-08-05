import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button,Input } from 'react-native-elements';









export default function itinerairePage() {
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
        placeholder='Lieu de départ'
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('Lieu de départ', val)}
      />
      <TextInput
        style={styles.input}
        placeholder='Destinataion'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('Destinataion', val)}
      />
      <TextInput
        style={styles.input}
        placeholder='Heure arrivée'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('Heure arrivée', val)}
      />
  
      <Pressable style={styles.button} 
       onPress={() => props.navigation.navigate('Mon Profil')}>
      <Text style={styles.text}>Trouver l'itinéraire</Text>
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
