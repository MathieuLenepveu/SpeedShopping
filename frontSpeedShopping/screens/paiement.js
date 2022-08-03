// import React from 'react';
// import {View, Text} from 'react-native';
// import {Button,Input } from 'react-native-elements';



// export default function paiement() {
//     return (
//       <View>

  

// <Text>
// RENVOI SIGN IN ou SIGN UP si pas ok
// </Text>

// <Text>
// PAGE DE CHARGEMENT DE l'OUTIL DE PAIEMENT
// </Text>


// </View>

//     ) 
//   }

import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  
  return (
    <View style={[styles.container,{paddingLeft:100, }]}>

 <Pressable style={styles.button} >
      <Text style={styles.text}>Bouton 1</Text>
    </Pressable>

    </View>
   
  );
}

const styles = StyleSheet.create({
  button: {
    
    width : "40%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#2999E4',
    position : 'absolute',
  },
  text: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    flex:1,
    backgroundColor:'#8CB0C9',
    alignItems: 'center',
    justifyContent:'center',
  },
  header:{


  }
});