import React, {useState, useEffect} from 'react' ;
import {View, Text,TextInput, StyleSheet, RecyclerViewBackedScrollView,TouchableOpacity,Pressable } from 'react-native';
import { useDispatch} from 'react-redux';
import {Button,Input } from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import DateField from 'react-native-datefield';
import { TextInputMask } from 'react-native-masked-text'



export default function homePage(props) {

  const [depart, setDepart] = useState('');
  const [arrive, setArrive] = useState('');
  const [horaire, setHoraire] = useState('');
  const [transport, setTransport] = useState('');
  const [besoinTest, setBesoin] = useState([]);
  const [essai, setEssai] = useState(false);
  const [selectedButton, setSelectedButton] = useState('') ;
  const [besoinSelected,setBesoinSelected] = useState([])
  const dispatch = useDispatch() ;

  // const GooglePlacesInput =   
      // <GooglePlacesAutocomplete
      //   placeholder='Search'
      //   minLength={2} // minimum length of text to search
      //   autoFocus={false}
      //   returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      //   listViewDisplayed='auto'    // true/false/undefined
      //   fetchDetails={true}
      //   renderDescription={row => row.description} // custom description render
      //   onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
      //     console.log(data, details);
      //   }}
        
      //   getDefaultValue={() => ''}
        
      //   query={{
      //     // available options: https://developers.google.com/places/web-service/autocomplete
      //     key: 'AIzaSyD5OG3mJyZ7ogU9wiuUmngHz2GOvBr9SqU',
      //     language: 'en', // language of the results
      //     types: '(cities)' // default: 'geocode'
      //   }}
        
      //   styles={{
      //     textInputContainer: {
      //       width: '100%',
      //     },
      //     description: {
      //       fontWeight: 'bold'
      //     },
      //     predefinedPlacesDescription: {
      //       color: '#1faadb'
      //     }
      //   }}
        
      //   currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      //   currentLocationLabel="Current location"
      //   nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      //   GoogleReverseGeocodingQuery={{
      //     // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      //   }}
      //   GooglePlacesSearchQuery={{
      //     // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
      //     rankby: 'distance',
      //     types: 'food'
      //   }}
  
      //   filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      //   // predefinedPlaces={[homePlace, workPlace]}
  
      //   debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      // />

  

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
    colors={["#00d4ff", "#01b4e9","#029bd9"]}
    style={{flex: 1,justifyContent:'space-between',alignItems:'center'}}
    start = {{x: 0.0, y: -0.20}}
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
                            inputContainerStyle={{borderColor:'#1A33A0',borderWidth:1,borderRadius:5,marginTop:20, backgroundColor:'white' ,paddingLeft:10,width:'80%'}}
                  />


                
                <Input
                            placeholder='Ton point de chute ?'
                            onChange={(e) => setArrive(e.nativeEvent.text)}
                            value={arrive}
                            inputContainerStyle={{borderColor:'#1A33A0',borderWidth:1,borderRadius:5,paddingLeft:10,backgroundColor:'white',width:'80%'}}

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
          <TouchableOpacity
           onPress={()=> {
            setTransport('DRIVING');
            if (selectedButton != 'car') {
            setSelectedButton('car');
            }else{
              setSelectedButton('') ;
            }
          }} style={{
                 padding: 20,
                 margin:5,
                backgroundColor:  selectedButton === 'car' ? '#1A33A0' : 'transparent',
                borderWidth: 3,
                borderColor: selectedButton === 'car' ? 'transparent' : '#1A33A0' ,
                borderRadius: 20,
                color:"#1A33A0",
              }} >
        <Icon 
       
              style={{
                color:selectedButton === 'car' ? 'white' : '#1A33A0' ,
                marginBottom:0,
              }}
                
                name='car'
                size={24}
                />
          </TouchableOpacity>


        <TouchableOpacity
          onPress={()=> {
            setTransport('TRANSIT');
            if (selectedButton != 'subway') {
            setSelectedButton('subway');
            }else{
              setSelectedButton('') ;
            }
          }}
        style={{
                padding: 20,
                margin:5,
                backgroundColor:  selectedButton === 'subway' ? '#1A33A0' : 'transparent',
                borderWidth: 3,
                borderColor: selectedButton === 'subway' ? 'transparent' : '#1A33A0' ,
                borderRadius: 20,
                color:"#1A33A0",
                
              }} >
        <Icon 
              style={{
                color:selectedButton === 'subway' ? 'white' : '#1A33A0' ,
                marginBottom:0,
              }}
                
                name='subway'
              
                size={24}
                />
          </TouchableOpacity>
    

      <TouchableOpacity
      onPress={()=> {
        setTransport('TRANSIT');
        if (selectedButton != 'bicycle') {
        setSelectedButton('bicycle');
        }else{
          setSelectedButton('') ;
        }
      }} style={{
        
                padding: 20,
                margin:5,
                backgroundColor:  selectedButton === 'bicycle' ? '#1A33A0' : 'transparent',
                borderWidth: 3,
                borderColor: selectedButton === 'bicycle' ? 'transparent' : '#1A33A0' ,
                borderRadius: 20,
                color:"#1A33A0",
              }} >
        <Icon 
         
              style={{
                color:selectedButton === 'bicycle' ? 'white' : '#1A33A0' ,
                marginBottom:0,
              }}
                
                name='bicycle'
               
                size={24}
                />
          </TouchableOpacity>


      
        

      <TouchableOpacity 
        onPress={()=> {
          setTransport('WALKING');
          if (selectedButton != 'male') {
          setSelectedButton('male');
          }else{
            setSelectedButton('') ;
          }
        }}
      style={{
                padding: 20,
                margin:10,
                backgroundColor:  selectedButton === 'male' ? '#1A33A0' : 'transparent',
                borderWidth: 3,
                borderColor: selectedButton === 'male' ? 'transparent' : '#1A33A0' ,
                borderRadius: 20,
                color:"#1A33A0",
              }} >
        <Icon 
              style={{
                color:selectedButton === 'male' ? 'white' : '#1A33A0' ,
              }}
                name='male'
              
                size={24}
                />
          </TouchableOpacity>       

        </View>


      </View>

    <View style={styles.bloc}>

       {/* INPUT DATE ET HEURE DE COLLECT  */}  

       <Text style={{marginBottom:30,  fontSize:20 ,
    color:'black',
   
    marginTop :-20}}>On fait ça quand ?</Text>
          <Input 
                    placeholder='Date et Heure de collect ?'
                    inputContainerStyle={{borderColor:'#1A33A0',borderWidth:1,borderRadius:5,marginTop:20, backgroundColor:'white',paddingLeft:10, width:'80%'}}
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
        onPress={()=> {
          test('Epicerie')
          }}
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
marginTop: 5,
marginBottom:5,
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
  inputBorder: {
    width: '30%',
    borderRadius: 8,
    borderColor: '#cacaca',
    borderWidth: 1,
    marginBottom: 20,
    margin:5,
    padding:20
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