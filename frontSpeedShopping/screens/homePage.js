import React, {useState, useEffect} from 'react' ;
import {View, Text,TextInput, StyleSheet, RecyclerViewBackedScrollView,TouchableOpacity,Pressable } from 'react-native';
import { useDispatch} from 'react-redux';
import {Button,Input } from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

export default function homePage(props) {

  const [depart, setDepart] = useState('');
  const [arrive, setArrive] = useState('');
  const [horaire, setHoraire] = useState('');
  const [transport, setTransport] = useState('');
  const [besoinTest, setBesoin] = useState([])
  const [essai, setEssai] = useState(false)
  const dispatch = useDispatch() ;
  


  function start(depart,arrive,horaire,transport,besoin) {

    dispatch({
            type:'itineraire/setItineraire',
            payload: {                       
              depart:depart,
              arrive:arrive,
              horaire:horaire,
              transport:transport,
              besoin:besoin
            }
           }) 
    props.navigation.navigate('ConfigurateurItineraire')
  }



function test(besoin) {

     var newTab = [...besoinTest]
     var isInside = false;

     for (let i = 0; i < newTab.length ; i++) {
      if (newTab[i] === besoin) {
        newTab.splice(i,1)
        isInside = true
      }
    }
     if (!isInside) {
      newTab.push(besoin)
     }
    setBesoin(newTab)
    
  }

  
  return (

  
    <LinearGradient
    // Background Linear Gradient
    colors={["#d1e8e8", "#4364e8"]}
    style={{flex: 1,justifyContent:'space-between',alignItems:'center'}}
    start = {{ X: -1, Y: 0}}
    end= {{ x:1, y: 0.3}}
  >

      <View style={styles.header}>

{/* BOUTON ACCES MON ESPACE  */}

<TouchableOpacity
        style={{
          borderWidth: 2 ,
          borderColor : '#1A33A0',
          borderRadius : 10,
          padding:15,
          width:300,
          marginTop : 40,
          alignItems : 'center',
          }}
        onPress={() => props.navigation.navigate('MonProfil')}
      >
        <Text style={{color:'#1A33A0'}}>MON ESPACE COMMERCANT</Text>
      </TouchableOpacity>

      </View>
    

      <View style={styles.bloc}>
      {/* INPUT POSITION USER  */}

      <Text  style={styles.text}>On va jusqu'où?</Text>
                <Input 
                            placeholder='Ta position ?'
                            onChange={(e) => setDepart(e.nativeEvent.text)}
                            value={depart} 
                            inputContainerStyle={{borderColor:'#1A33A0',borderWidth:1,borderRadius:5,marginTop:20, paddingLeft:10,width:'80%'}}
                  />
                
                <Input
                            placeholder='Ton point de chute ?'
                            onChange={(e) => setArrive(e.nativeEvent.text)}
                            value={arrive}
                            inputContainerStyle={{borderColor:'#1A33A0',borderWidth:1,borderRadius:5,paddingLeft:10,width:'80%'}}

                  /> 

  
      </View>    
      <View style={styles.bloc}>

{/* INPUT MOYEN DE LOCOMOTION USER  */} 

<Text style={{
    fontSize:20 ,
    color:'black',
    marginTop :-35,
  
  }}>On y va comment?</Text>
        
        <View style={{flexDirection:"row"}} >
        <Icon 
                style={styles.icon}
                name='car'
                onPress={()=> {setTransport('DRIVING')}}
                size={24}
                />
        <Icon
                style={styles.icon}
                name='subway'
                onPress={()=> {setTransport('TRANSIT')}}
                size={24}
                />
        <Icon
                style={styles.icon}
                name='bicycle'
                onPress={()=> {setTransport('BICYCLING')}}
                size={24}
                />
        <Icon
                style={styles.icon}
                name='male'
                onPress={()=> {setTransport('WALKING')}}
                size={24}
                />          

        </View>


      </View>

    <View style={styles.bloc}>

       {/* INPUT DATE ET HEURE DE COLLECT  */}  

       <Text style={styles.text}>On fait ça quand ?</Text>
          <Input 
                    placeholder='Date et Heure de collect ?'
                    inputContainerStyle={{borderColor:'#1A33A0',borderWidth:1,borderRadius:5,marginTop:20, paddingLeft:10, width:'80%'}}
                    onChange={(e) => setHoraire(e.nativeEvent.text)} 
                    value={horaire}
                  />

    </View>
    <View style={styles.bloc}>
       
{/* INPUT SELECTION DES BESOINS  */}  

<Text style={{
    fontSize:20 ,
    color:'black',
    marginTop :-30,
  }}>On cherche quoi?</Text>

<View style={[{flexDirection:"row"}, {marginTop :15} ]}>
<TouchableOpacity

        style={styles.button2}
        onPress={()=> {test('boucher',depart,arrive)}}
      >
        <Text style={styles.texte}>Boucher</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        disabled={essai}
        onPress={()=> test('Boulanger')}>
        <Text style={styles.texte}>Boulanger</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Primeur')}>
        <Text style={styles.texte}>Primeur</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Fleuriste')}>
        <Text style={styles.texte}>Fleuriste</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Tabac')}>
        <Text style={styles.texte}>Tabac</Text>
      </TouchableOpacity>

</View>
<View style={[{flexDirection:"row"}, {marginTop :15} ]}>
<TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Poissonerie')}
      >
        <Text style={styles.texte}>Poissonerie</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Droguerie')}
>
<Text style={styles.texte}>Droguerie</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Epicerie')}
>
<Text style={styles.texte}>Epicerie</Text>


      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Patisserie')}
>
<Text style={styles.texte}>Patisserie</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={undefined}      >

<Text style={styles.texte}>Autre</Text>

      </TouchableOpacity>

</View>
    </View>
      
      
<View style={styles.bloc}>


<TouchableOpacity
        style={{

          borderWidth: 2 ,
          borderColor : '#1A33A0',
          borderRadius : 10,
          padding:15,
          marginBottom : 20,
          alignItems : 'center',
          
          }}
        onPress={() => start(depart,arrive,horaire,transport,besoinTest)}
      >
        <Text style={{color:'#1A33A0'}}>START !</Text>
      </TouchableOpacity>

    </View>
    </LinearGradient>
  );
 }

 const styles = StyleSheet.create({

  container: {
    flex:1,

    justifyContent:'space-around',
  },

  header:{
marginTop: 10,

  },

  bloc:{
marginTop: 15,
marginBottom:15,
alignItems :'center',
  },


  button1:{

    borderWidth: 2 ,
    borderColor : '#1A33A0',
    borderRadius : 10,
    padding:15,
    margin : 20,
    alignItems : 'center',
    
    },

    texte:{color:'white'},

    button2:{

      color:'#1A33A0',
      borderColor : 'black',
      backgroundColor:'#3579f6',
      borderRadius : 5,
      padding:7,
      margin :1,
      alignItems : 'center',
      
      
      },

  text:{
    fontSize:20 ,
    color:'black',
   
    marginTop :-20,
  
  },

  input:{
fontSize:10,
margin:5,
padding: 10,
borderWidth : 2,
borderColor : "black",
width : "100%",
height : 20,
borderRadius : 10,
textAlign : "center",
justifyContent : "center",
backgroundColor: '#93CAEF',
  },

  icon:{
padding: 20,
margin:10,
borderWidth: 3,
borderColor:'#1A33A0' ,
borderRadius: 20,
color:"#1A33A0",

  },
  
  
  })