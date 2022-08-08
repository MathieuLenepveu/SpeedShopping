import React from 'react';
import {View, Text,StyleSheet, Pressable} from 'react-native';
import {Button,Input,FlatList } from 'react-native-elements';











export default function commandesCommercant() {
    return (
      <View style={styles.container}>
      {/* <FlatList
        data={[
          {key: 'Vin rouge', price: '20€'},
          {key: 'Vin blanc', price: '20€'},
          {key: 'Vin rosé', price: '20€'},
          {key: 'Saucisson', price: '20€'}, 
        ]}
        renderItem={({item, item2}) => <Text style={styles.item}>{item.key}</Text>}
      /> */}
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
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })