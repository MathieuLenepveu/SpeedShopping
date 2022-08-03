

import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  
  return (
    <View style={[styles.container,{paddingLeft:100, }]}>

 <Pressable style={styles.button} >
      <Text style={styles.text}>Bouton 1</Text>
    </Pressable>

</View>

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

<<<<<<< HEAD

<Pressable >
  <Text>I'm pressable!</Text>
</Pressable>

</View>




    ) 
  }
=======

  }
});
>>>>>>> 4cce7ff7b73f5b5e1696daefa764de0c3958e38e
