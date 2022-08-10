import React from 'react';
import {View, Image,Text, StyleSheet,TouchableOpacity} from 'react-native';
import {Button,Inpu } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';











export default function accueil(props) {
  return (
    <LinearGradient
    // Background Linear Gradient
    colors={["#d1e8e8", "#4364e8"]}
    style={{flex: 1,justifyContent:'space-between',alignItems:'center'}}
    start = {{ X: -1, Y: 0}}
    end= {{ x:1, y: 0.3}}
  >
        <View>
        <Image source={require('../assets/LogoSPEEDSHOPPING.jpeg')} style={{ width: 300, height: 200 }}/>
        </View>
        <View>
          <View>
 {/* <Button style={styles.button} color='red' title="J'essaie sans inscription"
                onPress={() => props.navigation.navigate('Home')}
              /> */}
              <TouchableOpacity
        style={styles.button1}
        onPress={() => props.navigation.navigate('Home')}
      >
        <Text style={styles.text3}>J'essaie sans inscription</Text>
      </TouchableOpacity>

          </View>
          <View>
{/* <Button style={styles.button} title="J'ai un compte"
                onPress={() => props.navigation.navigate('SignIn')}
              /> */}
              <TouchableOpacity
        style={styles.button1}
        onPress={() => props.navigation.navigate('SignIn')}
      >
        <Text style={styles.text3}>J'ai un compte</Text>
      </TouchableOpacity>

          </View>
          <View>
            {/* <Button style={styles.button} title="Je m'inscris"
                onPress={() => props.navigation.navigate('SignUp')}
              /> */}
              <TouchableOpacity
        style={styles.button1}
        // onPress={() => props.navigation.navigate('SignUp')}
      >
        <Text style={styles.text3} >Je m'inscris comme:</Text>
      </TouchableOpacity>

      <View  style={{flexDirection:"row"}} >
      <TouchableOpacity
        style={styles.button3}
        onPress={() => props.navigation.navigate('SignUp')}
      >
        <Text style={styles.text3}>Client</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button3}
        onPress={() => props.navigation.navigate('newCommercant')}
      >
        <Text style={styles.text3}>Commerçant</Text>
      </TouchableOpacity>
            
          
          
          </View>   
              
              



      </View>
        </View>      
    </LinearGradient>
  );
 }


 const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor:'#5A7E95',
    alignItems: 'center',
    justifyContent:'space-around',
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
      padding:15,
      margin : 20,
      backgroundColor :'#2131A5',
      alignItems : 'center',
    
      
      },

      text3:{
        
        color:'white',
      
      
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