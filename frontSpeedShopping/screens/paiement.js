import React, { useState,useEffect } from 'react';
import { Text,TextInput, View, StyleSheet, Pressable,Image,Linking } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'; 

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';




export default function Button(props) {

  const redux = useSelector((state)=> state ) ;
  const [depart,setDepart] = useState('')
  const [arrive,setArrive] = useState('')



  useEffect(() => {


// ***************************** RECEPTION STORE ****************************** 
  setDepart(redux.saveIti.depart)
  setArrive(redux.saveIti.arrive)
  console.log(depart);
console.log(arrive);
  
} ,[]) ;



  
  return (
    

    <LinearGradient
    // Background Linear Gradient
    colors={["#d1e8e8", "#1E90FF"]}
    style={{flex: 1,justifyContent:'space-between',alignItems:'center'}}
    start = {{ X: -1, Y: 0}}
    end= {{ x:1, y: 0.3}}
  >


  <View  style={[{flexDirection:"row"},{justifyContent:'space-between', marginBottom: 40}]} >

<Image source={require('../assets/MasterCard_Logo.svg.png')} style={{ width: 100, height: 60 ,margin:10, }}/>

<Image source={require('../assets/VISA.jpeg')} style={{ width: 60, height: 60, margin:10, }}/>
<Image source={require('../assets/americanExpress.png')} style={{ width: 100, height: 60, margin:10, }}/>

</View>



<View style={{
 backgroundColor :'#117CCB',
  justifyContent :"center",
  alignItems :"center",
  width: "90%",
  borderRadius: 25,
}}>

<View  style={{flexDirection:"row"}} >
  <Text style={{textAlign : 'center', marginTop:30, fontWeight:"bold"}}>
    N°CARTE
    </Text>
<TextInput
        style={styles.input}
        value=""
        placeholder="XXXX XXXX XXXX XXXX"
              />
</View>


  <View  style={[{flexDirection:"row"},{justifyContent:'space-between'}]} >
  <Text style={{justifyContent : 'center', textAlign:'center', marginTop:15, width:70, fontWeight:"bold"}} >
    Date expiration
    </Text>
  <TextInput
          style={styles.input2}
          value=""
          placeholder="Mois"
                />
                <TextInput
          style={styles.input2}
          value=""
          placeholder="Année"
                />
  </View>


  <View  style={[{flexDirection:"row"},{justifyContent:'center'}]} >
  <Text style={{justifyContent : 'center', textAlign:'center', marginTop:20,marginRight:50, width:70, fontWeight:"bold"}}>
    Code Sécurité
    </Text>
  <TextInput
          style={styles.input3}
          value=""
          placeholder="XXX"
                />
  <Ionicons name='md-information-circle' size={35} color="red" style={{margin:15}}/>
  </View>

</View>
<View>
<Pressable style={{ width: 150, height: 50, backgroundColor: "skyblue", borderRadius: 6, alignItems: 'center',
    justifyContent: 'center', marginTop: 30,}}
    onPress={() => Linking.openURL(`maps://app?saddr=${depart}&daddr=${arrive}`)}
    >
      <Text style={styles.text}>VALIDER</Text>
    </Pressable>
</View>

<Text style={{marginTop:30, fontWeight:"bold", justifyContent:'center', textAlign:'center'}}> NE COMMUNIQUEZ JAMAIS VOS COORDONNEES BANCAIRES / SPEEDSHOPPING S'ENGAGE DANS LA PROTECTION DE VOS DONNEES</Text>


</LinearGradient>

);
}

  
const styles = StyleSheet.create({
  input: {
    width: 230,
    height: 50,
    backgroundColor: '#C2D4E3',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  input2: {
    width: 100,
    height: 40,
    backgroundColor: '#C2D4E3',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  input3: {
    width: 80,
    height: 40,
    backgroundColor: '#C2D4E3',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
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


