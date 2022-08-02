import React from 'react';
import {View, Text } from 'react-native';
import {Button,Input,ListItem } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';







export default function homePage(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2ecc71'}}>
      <Button title="Mon Espace"
        onPress={() => props.navigation.navigate('MonProfil')}
      />


      <Text>On va jusu'où?</Text>
      <Input
            containerStyle = {{marginBottom: 25, width: '70%'}}
            inputStyle={{marginLeft: 10}}
            placeholder='Ta position'
        />
       
       <Input
            containerStyle = {{marginBottom: 25, width: '70%'}}
            inputStyle={{marginLeft: 10}}
            placeholder='Ton point de chute'
        />
        <Text>On y va comment?</Text>
        
        <Icon
                name='car'
                size={24}
                color="#eb4d4b"
                />
                <Icon
                name='bus'
                size={24}
                color="#eb4d4b"
                />
          
          <Text>On fait ça quand</Text>
      <Input
            containerStyle = {{marginBottom: 25, width: '70%'}}
            inputStyle={{marginLeft: 10}}
            placeholder='Date et Heure de collect'
        />
        <Text>On cherche quoi?</Text>
      
        


      <Button title="START"
        onPress={() => props.navigation.navigate('ConfigurateurItineraire')}
      />
    </View>
  );
 }