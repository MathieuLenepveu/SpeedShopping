import React from 'react';
import {View, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';









export default function commandesCommercant() {
    return (
      <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Vin rouge', price: '20€'},
          {key: 'Vin blanc', price: '20€'},
          {key: 'Vin rosé', price: '20€'},
          {key: 'Saucisson', price: '20€'}, 
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>

    ) 
  }