import React from 'react';
import {View, Image,Text, StyleSheet} from 'react-native';
import {Button,Inpu } from 'react-native-elements';












export default function accueil(props) {
  return (
    <View style={styles.container}>
        <View>
        <Image source={require('../assets/LogoSPEEDSHOPPING.jpeg')} style={{ width: 300, height: 200 }}/>
        </View>
        <View>
              <Button style={styles.button} color='red' title="J'essaie sans inscription"
                onPress={() => props.navigation.navigate('Home')}
              />
              <Button style={styles.button} title="J'ai un compte"
                onPress={() => props.navigation.navigate('SignIn')}
              />
              <Button style={styles.button} title="Je m'inscris"
                onPress={() => props.navigation.navigate('SignUp')}
              />
        </View>      
    </View>
  );
 }


const styles = StyleSheet.create({

container: {
  flex:1,
  backgroundColor:'#fff',
  alignItems: 'center',
  justifyContent:'center',
},

button:{
  padding:20
  }

})