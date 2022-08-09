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
        style={{flex: 1}}
        start = {{ X: -1, Y: 0}}
        end= {{ x:1, y: 0.3}}
      >


      <View style={styles.header}>

{/* BOUTON ACCES MON ESPACE  */}

<TouchableOpacity
        style={styles.button1}
        onPress={() => props.navigation.navigate('MonProfil')}
      >
        <Text>MON ESPACE</Text>
      </TouchableOpacity>

      </View>
    

      <View style={styles.bloc}>
      {/* INPUT POSITION USER  */}

      <Text style={styles.text}>On va jusqu'où?</Text>
                <Input 
                            placeholder='Ta position ?'
                            onChange={(e) => setDepart(e.nativeEvent.text)}
                            value={depart} 
                  />
                
                <Input
                            placeholder='Ton point de chute ?'
                            onChange={(e) => setArrive(e.nativeEvent.text)}
                            value={arrive}
                  /> 

  
      </View>    
      <View style={styles.bloc}>

{/* INPUT MOYEN DE LOCOMOTION USER  */} 

<Text style={styles.text}>On y va comment?</Text>
        
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
          <TextInput 
                    placeholder='Date et Heure de collect ?'
                    onChange={(e) => setHoraire(e.nativeEvent.text)} 
                    value={horaire}
                  />

    </View>
    <View style={styles.bloc}>
       
{/* INPUT SELECTION DES BESOINS  */}  

<Text style={styles.text}>On cherche quoi?</Text>

<View style={[{flexDirection:"row"}, {marginTop :15} ]}>
<TouchableOpacity
        style={styles.button2}
        onPress={()=> {test('boucher',depart,arrive)}}
      >
        <Text>Boucher</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Boulanger')}>
        <Text>Boulanger</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Primeur')}>

        <Text>Primeur</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Fleuriste')}>

        <Text>Fleuriste</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Tabac')}>
        <Text>Tabac</Text>
      </TouchableOpacity>

</View>
<View style={[{flexDirection:"row"}, {marginTop :15} ]}>
<TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Poissonerie')}
      >
        <Text>Poissonerie</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Droguerie')}
>
        <Text>Droguerie</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Epicerie')}
>
        <Text>Epicerie</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={()=> test('Patisserie')}
>
        <Text>Patisserie</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={undefined}      >
        <Text>Autre</Text>
      </TouchableOpacity>

</View>




    </View>
      
      
<View style={styles.bloc}>


<TouchableOpacity
        style={styles.button1}
        onPress={() => start(depart,arrive,horaire,transport,besoinTest)}
      >
        <Text>START !</Text>
      </TouchableOpacity>

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
marginTop: 5,
marginBottom:5,
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

    button2:{
      borderWidth : 2 ,
      borderColor : 'black',
      borderRadius : 5,
      padding:2,
      margin :1,
      backgroundColor :'#2294DF',
      alignItems : 'center',
      
      
      },

  text:{
    fontSize:20 ,
    color:'black',
   
    margin :0,
  
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
padding: 10,
margin:10,
color:"#2E43D8",

  },
  
  
  })