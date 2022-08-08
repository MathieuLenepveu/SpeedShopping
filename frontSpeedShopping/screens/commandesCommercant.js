import React from 'react';
import {View, Text,StyleSheet, Pressable,TouchableOpacity} from 'react-native';
import {Button,Input,FlatList,ListItem,Icon,ListItemAccordionProps,Avatar,Badge } from 'react-native-elements';












export default function commandesCommercant(props) {

let expanded = false

    return (
      <View>
      <ListItem style={{marginBottom: 20}}>
  <Badge
    value="COMMANDE N°XXXX1"
    textStyle={{ color: 'black',
                    fontSize:20}}
    containerStyle={{ margin:20}}
    badgeStyle={{height:50, width:300, borderRadius:15}}
  />
  
</ListItem>
<View  style={{flexDirection:"row"}} >
  <TouchableOpacity
        style={styles.button}
       
      >
        <Text>Croissant</Text>
      </TouchableOpacity>
<TouchableOpacity
        style={styles.button}
       
      >
        <Text>Quantité: 2</Text>
      </TouchableOpacity>      


  </View>

<ListItem style={{marginBottom: 20}}>
  <Badge
    value="COMMANDE N°XXXX1"
    textStyle={{ color: 'black',
                    fontSize:20}}
    containerStyle={{ margin:20}}
    badgeStyle={{height:50, width:300, borderRadius:15}}
  />


  
</ListItem>

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