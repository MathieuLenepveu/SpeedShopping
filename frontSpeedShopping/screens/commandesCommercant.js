import React from 'react';
import {View, Text,StyleSheet, Pressable,TouchableOpacity,ScrollView} from 'react-native';
import {Button,Input,FlatList,ListItem,Icon,ListItemAccordionProps,Avatar,Badge } from 'react-native-elements';


import { Ionicons } from '@expo/vector-icons';
import { $CombinedState } from 'redux';









export default function commandesCommercant(props) {

let expanded = false

    return (
      <ScrollView>

        <View style={styles.order}>

<View  style={{flexDirection:"row"}} >
<Badge
value="COMMANDE N°XXXX1"
textStyle={{ color: 'black',
            fontSize:15}}
containerStyle={{ margin:2}}
badgeStyle={{height:50, width:200, borderRadius:15}}
/>
<Badge
value="09h00"
textStyle={{ color: 'black',
            fontSize:20}}
containerStyle={{ margin:2}}
badgeStyle={{height:50, width:80, borderRadius:15}}
/>
<Ionicons name='chevron-down-circle' size={25} color="" style={{marginLeft:10,marginTop:15}}/>
<Badge
value=""
textStyle={{ color: 'black',
            fontSize:20}}
containerStyle={{ marginLeft:10, marginTop:15}}
badgeStyle={{height:30, width:30, borderRadius:15,backgroundColor:"#3AD155"}}
/>
</View>

        </View>

        <View style={styles.order}>

        <View  style={{flexDirection:"row"}} >
  <Badge
    value="COMMANDE N°XXXX2"
    textStyle={{ color: 'black',
                    fontSize:15}}
    containerStyle={{ margin:2}}
    badgeStyle={{height:50, width:200, borderRadius:15}}
  />
  <Badge
    value="09h00"
    textStyle={{ color: 'black',
                    fontSize:20}}
    containerStyle={{ margin:2}}
    badgeStyle={{height:50, width:80, borderRadius:15}}
  />
  <Ionicons name='chevron-down-circle' size={25} color="" style={{marginLeft:10,marginTop:15}}/>
  <Badge
    value=""
    textStyle={{ color: 'black',
                    fontSize:20}}
    containerStyle={{ marginLeft:10, marginTop:15}}
    badgeStyle={{height:30, width:30, borderRadius:15,backgroundColor:"#3AD155"}}
  />
  </View>


        </View>

        <View style={styles.order}>

        <View  style={{flexDirection:"row"}} >
  <Badge
    value="COMMANDE N°XXXX3"
    textStyle={{ color: 'black',
                    fontSize:15}}
    containerStyle={{ margin:2}}
    badgeStyle={{height:50, width:200, borderRadius:15}}
  />
  <Badge
    value="09h15"
    textStyle={{ color: 'black',
                    fontSize:20}}
    containerStyle={{ margin:2}}
    badgeStyle={{height:50, width:80, borderRadius:15}}
  />
  <Ionicons name='chevron-down-circle' size={25} color="" style={{marginLeft:10,marginTop:15}}/>
  <Badge
    value=""
    textStyle={{ color: 'black',
                    fontSize:20}}
    containerStyle={{ marginLeft:10, marginTop:15}}
    badgeStyle={{height:30, width:30, borderRadius:15,backgroundColor:"#3AD155"}}
  />
  </View>


        </View>

        <View style={styles.order}>

        <View  style={{flexDirection:"row"}} >
  <Badge
    value="COMMANDE N°XXXX4"
    textStyle={{ color: 'black',
                    fontSize:15}}
    containerStyle={{ margin:2}}
    badgeStyle={{height:50, width:200, borderRadius:15}}
  />
  <Badge
    value="09h15"
    textStyle={{ color: 'black',
                    fontSize:20}}
    containerStyle={{ margin:2}}
    badgeStyle={{height:50, width:80, borderRadius:15}}
  />
  <Ionicons name='chevron-down-circle' size={25} color="" style={{marginLeft:10,marginTop:15}}/>
  <Badge
    value=""
    textStyle={{ color: 'black',
                    fontSize:20}}
    containerStyle={{ marginLeft:10, marginTop:15}}
    badgeStyle={{height:30, width:30, borderRadius:15,backgroundColor:"#3AD155"}}
  />
  </View>


        </View>

        <View style={styles.order}>

        <View  style={{flexDirection:"row"}} >
  <Badge
    value="COMMANDE N°XXXX5"
    textStyle={{ color: 'black',
                    fontSize:15}}
    containerStyle={{ margin:2}}
    badgeStyle={{height:50, width:200, borderRadius:15}}
  />
  <Badge
    value="10h30"
    textStyle={{ color: 'black',
                    fontSize:20}}
    containerStyle={{ margin:2}}
    badgeStyle={{height:50, width:80, borderRadius:15}}
  />
  <Ionicons name='chevron-up-circle' size={25} color="" style={{marginLeft:10,marginTop:15}}/>
  <Badge
    value=""
    textStyle={{ color: 'black',
                    fontSize:20}}
    containerStyle={{ marginLeft:10, marginTop:15}}
    badgeStyle={{height:30, width:30, borderRadius:15,backgroundColor:"#3AD155"}}
  />
  </View>
  <View  style={{flexDirection:"row"}} >
  <TouchableOpacity  style={styles.button3}  >
        <Text style={{color : "white"}}>La Baguette Tradition</Text>
      </TouchableOpacity>
<TouchableOpacity
        style={styles.button4}
       
      >
        <Text style={{color : "white"}}>Quantité: 1</Text>
      </TouchableOpacity>  
         
<Ionicons name='checkbox-outline' size={25} color="" style={{margin:5}}/>
  </View>


<View  style={{flexDirection:"row"}} >
  <TouchableOpacity  style={styles.button3}  >
        <Text style={{color : "white"}}>Croissant</Text>
      </TouchableOpacity>
<TouchableOpacity
        style={styles.button4}
       
      >
        <Text style={{color : "white"}}>Quantité: 2</Text>
      </TouchableOpacity>      
      <Ionicons name='checkbox-outline' size={25} color="" style={{margin:5}}/>
  </View>

  <View  style={{flexDirection:"row"}} >
  <TouchableOpacity  style={styles.button3}  >
        <Text style={{color : "white"}}>Pizza</Text>
      </TouchableOpacity>
<TouchableOpacity
        style={styles.button4}
       
      >
        <Text style={{color : "white"}}>Quantité: 3</Text>
      </TouchableOpacity>  
         
<Ionicons name='checkbox-outline' size={25} color="" style={{margin:5}}/>
  </View>

  <View  style={{flexDirection:"row"}} >
  <TouchableOpacity  style={styles.button3}  >
        <Text style={{color : "white"}}>Farine</Text>
      </TouchableOpacity>
<TouchableOpacity
        style={styles.button4}
       
      >
        <Text style={{color : "white"}}>Quantité: 1</Text>
      </TouchableOpacity>  
         
<Ionicons name='checkbox-outline' size={25} color="" style={{margin:5}}/>
  </View>
        </View>

        <View style={styles.order}>

<View  style={{flexDirection:"row"}} >
<Badge
value="COMMANDE N°XXXX6"
textStyle={{ color: 'black',
            fontSize:15}}
containerStyle={{ margin:2}}
badgeStyle={{height:50, width:200, borderRadius:15}}
/>
<Badge
value="10h45"
textStyle={{ color: 'black',
            fontSize:20}}
containerStyle={{ margin:2}}
badgeStyle={{height:50, width:80, borderRadius:15}}
/>
<Ionicons name='chevron-down-circle' size={25} color="" style={{marginLeft:10,marginTop:15}}/>
<Badge
value=""
textStyle={{ color: 'black',
            fontSize:20}}
containerStyle={{ marginLeft:10, marginTop:15}}
badgeStyle={{height:30, width:30, borderRadius:15,backgroundColor:"#D81F32"}}
/>
</View>
        </View>

        <View style={styles.order}>

<View  style={{flexDirection:"row"}} >
<Badge
value="COMMANDE N°XXXX7"
textStyle={{ color: 'black',
            fontSize:15}}
containerStyle={{ margin:2}}
badgeStyle={{height:50, width:200, borderRadius:15}}
/>
<Badge
value="11H"
textStyle={{ color: 'black',
            fontSize:20}}
containerStyle={{ margin:2}}
badgeStyle={{height:50, width:80, borderRadius:15}}
/>
<Ionicons name='chevron-down-circle' size={25} color="" style={{marginLeft:10,marginTop:15}}/>
<Badge
value=""
textStyle={{ color: 'black',
            fontSize:20}}
containerStyle={{ marginLeft:10, marginTop:15}}
badgeStyle={{height:30, width:30, borderRadius:15,backgroundColor:"#D81F32"}}
/>
</View>
        </View>

        <View style={styles.order}>

<View  style={{flexDirection:"row"}} >
<Badge
value="COMMANDE N°XXXX8"
textStyle={{ color: 'black',
            fontSize:15}}
containerStyle={{ margin:2}}
badgeStyle={{height:50, width:200, borderRadius:15}}
/>
<Badge
value="11H"
textStyle={{ color: 'black',
            fontSize:20}}
containerStyle={{ margin:2}}
badgeStyle={{height:50, width:80, borderRadius:15}}
/>
<Ionicons name='chevron-up-circle' size={25} color="" style={{marginLeft:10,marginTop:15}}/>
<Badge
value=""
textStyle={{ color: 'black',
            fontSize:20}}
containerStyle={{ marginLeft:10, marginTop:15}}
badgeStyle={{height:30, width:30, borderRadius:15,backgroundColor:"#D81F32"}}
/>
</View>
<View  style={{flexDirection:"row"}} >
  <TouchableOpacity  style={styles.button3}  >
        <Text style={{color : "white"}}>Croissant</Text>
      </TouchableOpacity>
<TouchableOpacity
        style={styles.button4}
       
      >
        <Text style={{color : "white"}}>Quantité: 5</Text>
      </TouchableOpacity>      
      <Ionicons name='checkbox-outline' size={25} color="" style={{margin:5}}/>
  </View>

  <View  style={{flexDirection:"row"}} >
  <TouchableOpacity  style={styles.button3}  >
        <Text style={{color : "white"}}>Pain Au Chocolat</Text>
      </TouchableOpacity>
<TouchableOpacity
        style={styles.button4}
       
      >
        <Text style={{color : "white"}}>Quantité: 10</Text>
      </TouchableOpacity>      
      <Ionicons name='md-square-outline' size={25} color="" style={{margin:5}}/>
  </View>
        </View>

        <View style={styles.order}>

<View  style={{flexDirection:"row"}} >
<Badge
value="COMMANDE N°XXXX9"
textStyle={{ color: 'black',
            fontSize:15}}
containerStyle={{ margin:2}}
badgeStyle={{height:50, width:200, borderRadius:15}}
/>
<Badge
value="11H"
textStyle={{ color: 'black',
            fontSize:20}}
containerStyle={{ margin:2}}
badgeStyle={{height:50, width:80, borderRadius:15}}
/>
<Ionicons name='chevron-down-circle' size={25} color="" style={{marginLeft:10,marginTop:15}}/>
<Badge
value=""
textStyle={{ color: 'black',
            fontSize:20}}
containerStyle={{ marginLeft:10, marginTop:15}}
badgeStyle={{height:30, width:30, borderRadius:15,backgroundColor:"#D81F32"}}
/>
</View>
        </View>

        <View style={styles.order}>

<View  style={{flexDirection:"row"}} >
<Badge
value="COMMANDE N°XXX10"
textStyle={{ color: 'black',
            fontSize:15}}
containerStyle={{ margin:2}}
badgeStyle={{height:50, width:200, borderRadius:15}}
/>
<Badge
value="11H15"
textStyle={{ color: 'black',
            fontSize:20}}
containerStyle={{ margin:2}}
badgeStyle={{height:50, width:80, borderRadius:15}}
/>
<Ionicons name='chevron-down-circle' size={25} color="" style={{marginLeft:10,marginTop:15}}/>
<Badge
value=""
textStyle={{ color: 'black',
            fontSize:20}}
containerStyle={{ marginLeft:10, marginTop:15}}
badgeStyle={{height:30, width:30, borderRadius:15,backgroundColor:"#D81F32"}}
/>
</View>
        </View>

        <View style={styles.order}>

<View  style={{flexDirection:"row"}} >
<Badge
value="COMMANDE N°XXX11"
textStyle={{ color: 'black',
            fontSize:15}}
containerStyle={{ margin:2}}
badgeStyle={{height:50, width:200, borderRadius:15}}
/>
<Badge
value="11H30"
textStyle={{ color: 'black',
            fontSize:20}}
containerStyle={{ margin:2}}
badgeStyle={{height:50, width:80, borderRadius:15}}
/>
<Ionicons name='chevron-down-circle' size={25} color="" style={{marginLeft:10,marginTop:15}}/>
<Badge
value=""
textStyle={{ color: 'black',
            fontSize:20}}
containerStyle={{ marginLeft:10, marginTop:15}}
badgeStyle={{height:30, width:30, borderRadius:15,backgroundColor:"#D81F32"}}
/>
</View>
        </View>


    </ScrollView>

    ) 
  }

  const styles = StyleSheet.create({

    container: {
      flex:1,
      backgroundColor:'#5A7E95',
      alignItems: 'center',
      justifyContent:'space-around',
    },

    order:{

      backgroundColor:"#88979C",
      margin:5,
    },
  
    header:{
  marginTop: 10,
  
    },
  
    bloc:{
  margin:30,
  alignItems :'center',
    },
    
    button1:{
      borderWidth : 2 ,
      borderColor : 'black',
      borderRadius : 100,
      padding:15,
      margin : 20,
      backgroundColor :'#2294DF',
      alignItems : 'center',
      
      
      },
  
      button3:{
        
        borderWidth : 2 ,
        borderColor : 'black',
        borderRadius : 10,
        padding:5,
        margin : 5,
        backgroundColor :'#2131A5',
        alignItems : 'center',
        
        },
        button4:{
        
          borderWidth : 2 ,
          borderColor : 'black',
          borderRadius : 10,
          padding:5,
          margin : 5,
          backgroundColor :'#2A347E',
          alignItems : 'center',
          
          },
  
    text:{
      fontSize:20 ,
      color:'blue',
     
      margin :0,
    
    },
  
    input:{
  fontSize:10,
  margin:5,
  padding: 10,
  borderWidth : 2,
  borderColor : "violet",
  width : "100%",
  height : 20,
  borderRadius : 10,
  textAlign : "center",
  
    },
  
    icon:{
  padding: 10,
  margin:10,
  color:"#eb4d4b",
  
    },
    
    
    })