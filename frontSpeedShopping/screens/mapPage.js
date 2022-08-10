import React, {useState, useEffect} from 'react' ;
import { View,Text,TouchableOpacity,StyleSheet, Linking, Pressable} from 'react-native' ;
import {Button,Overlay, Input,ListItem, Tab} from 'react-native-elements';
import * as Location from 'expo-location';
import  MapViewDirections from'react-native-maps-directions'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

import { useSelector, useDispatch } from 'react-redux'; 

import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';


// import AsyncStorage from '@react-native-async-storage/async-storage';

// pour itineraire https://www.npmjs.com/package/react-native-maps-directions


export default function Map(props) {
  
// ***************************** ETATS ****************************** 

        const [currentLatitude, setCurrentLatitude] = useState(0) ; 
        const [currentLongitude, setCurrentLongitude] = useState(0) ;
        const [isOpen, setIsOpen] = useState(false) ;
        const [magasin,setMagasin] = useState('');
        const [depart,setDepart] = useState('');
        const [arrive,setArrive] = useState('');
        const [transport,setTransport] = useState('');
        // const [besoin,setBesoin] = useState([]);
        const [waypoints , setWaypoints] = useState([]);
        const [commercantList , setCommercantList] = useState([]);
        Geocoder.init("AIzaSyD5OG3mJyZ7ogU9wiuUmngHz2GOvBr9SqU", {language : "fr"})
        const redux = useSelector((state)=> state ) ;

// ***************************** ASK & SET localistaion ****************************** 

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          Location.watchPositionAsync({distanceInterval: 10000}, (location) => { setCurrentLatitude(location.coords.latitude), setCurrentLongitude(location.coords.longitude)});
  
// ***************************** ASK & SET commercantList ****************************** 

            var rawResponse = await fetch('http://172.20.10.2:3000/map', {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({redux:redux.saveIti.besoin})
                    });
                                

            rawResponse = await rawResponse.json();
            var newTab= [];

              for (let i = 0; i < rawResponse.commercantAfficher.length; i++) {
                var location = rawResponse.commercantAfficher[i].address ; 
                var tryIt =   await Location.geocodeAsync(location) ;
// ***************************** SET commercantList AVEC adresse en LAT/LNG ****************************** 
                   newTab = [...rawResponse.commercantAfficher]
                   newTab[i].address = {latitude:tryIt[0].latitude,longitude : tryIt[0].longitude }      
            }

          // setCommercantList(newTab)


      })();  

// ***************************** RECEPTION STORE ****************************** 
      setDepart(redux.saveIti.depart)
      setArrive(redux.saveIti.arrive)
      setTransport(redux.saveIti.transport)

      setCommercantList([{
        nom: 'Maison Farine ',
        address: {
          latitude: 45.7662403 ,
          longitude:4.8276229
        },
        horaire:{
          HeuresOuverts: 7,
          Heuresfermes: 13
        },
        type: 'boulangerie'

      },
      {
        nom: 'Poissonnerie Maison Vianey "Croix-Rousse"',
        address: {
          latitude: 45.774009704589844,
          longitude: 4.827260494232178
        },
        horaire:{
          HeuresOuverts: 8,
          Heuresfermes: 19
        },
        type: 'poissonerie'
      },
      {
        nom: "L'épicerie place des terreaux",
        address: {
          latitude: 45.76707077026367,
          longitude: 4.832343578338623
        },
        horaire:{
          HeuresOuverts: 0,
          Heuresfermes: 24
        },
        type: 'epicerie'

      }])

      setWaypoints([{
        latitude: 45.76707077026367,
        longitude: 4.832343578338623
      },{
        latitude: 45.7662403 ,
        longitude:4.8276229
      },{
        latitude: 45.774009704589844,
        longitude: 4.827260494232178
      },
    ])
      
} ,[]) ;

// useEffect juste pour les waypoints 



// useEffect(() => {
//   (async () => {
// ***************************** ASK & SET commercantList ****************************** 
      
// var newWaypoints= [...waypoints];


// for (let i = 0; i < newTab.length; i++) {
// // ***************************** SET waypoints ****************************** 

//      newWaypoints.push({
//       latitude:newTab[i].address.latitude,
//       longitude : newTab[i].address.longitude 
//      })
// }

// })();  
// } ,[]) ;



// ***************************** CLOSE the overlay ****************************** 

    var closeOverlay = () => {
        setIsOpen(false) 

}

// ***************************** ADD Lat/Lng to State ****************************** 

   var test = (bool,nom,horaire,statut) => {

    setIsOpen(bool) ;
    setMagasin({
      nom : nom,
      ouverture: horaire.HeuresOuverts,
      fermeture: horaire.Heuresfermes,
      type: statut,
    })
        
}
// ***************************** ADD commercant to itinéraire ****************************** 


function testAddToItinéraire (magasin) {

    var isInside = false;
    var newTab = [...waypoints]

    if (newTab != 0) {
      for (let i = 0; i < commercantList.length; i++) {

        if (commercantList[i].type == magasin.type) {
          newTab.splice(i,1,magasin) 
          setWaypoints(newTab)
            isInside = true ;
        }
    }
    }

     if (!isInside) {
        newTab.push(magasin)
        setWaypoints(newTab)
     }

}

// ***************************** SHOW ALL THE MARKER  ****************************** 


  var markerList = commercantList.map((commercant,i)=>{
      return (
      <Marker 
      key={i} 
      pinColor='blue' 
      // onPress={()=>test(true,commercant.enseignecommerciale, commercant.hours[0], commercant.type)}
      coordinate={commercant.address}
      title={commercant.nom}
      description={`${commercant.horaire.HeuresOuverts}h - ${commercant.horaire.Heuresfermes}h`}
      />
      )})     

  var directions = 
      <MapViewDirections
      resetOnChange={false}
      origin={depart}
      waypoints={waypoints}
      destination={arrive}
      // mode={transport}
      optimizeWaypoints={true}
      timePrecision="now"
      apikey='AIzaSyD5OG3mJyZ7ogU9wiuUmngHz2GOvBr9SqU'
      strokeWidth={3}
      />  

// ***************************** RETURN ****************************** 
 
return(


 <View>
{/* ***************************** OVERLAY   ******************************  */}
<View style={{height:500}}>

<Overlay isVisible={isOpen} overlayStyle={{width: '70%', justifyContent:'center', alignItems:'center'}} onBackdropPress={closeOverlay}>

              <Text>{magasin.nom} </Text>
              <Text>{magasin.ouverture}h - {magasin.fermeture}h </Text>
                
                <Button
                icon={
                <FontAwesome
                    name="map-marker"
                    size={20}
                    color="#ffffff"
                 />}
                buttonStyle={{backgroundColor:'#eb4d4b'}}
                title="Ajouter a l'itinéraire"
                type="solid"
                 onPress={() => testAddToItinéraire(magasin)}
                />
</Overlay>

{/* ***************************** MAP INITIAL SETTING  ******************************  */}

<MapView style={{flex : 1}}
  provider = {PROVIDER_GOOGLE}
  initialRegion={{
   latitude:  48.866667,  // pour centrer la carte, REUSSIER A LE FAIRE SUR POS UTILISATEUR
   longitude: 2.333333,
   latitudeDelta: 0.0922,  // le rayon à afficher à partir du centre
   longitudeDelta: 0.0421,
}} >

<Feather name="arrow-left-circle" onPress={() => props.navigation.navigate('Home')}  size={30} color="black" style={{marginTop:40, marginLeft:20}} />


{directions}

{/* ***************************** MARQERUR POS   ******************************  */}



<Marker coordinate={{
        latitude: currentLatitude , longitude: currentLongitude
      }}
     title="Hello"
     description="I am here"
     draggable  // Rendre le marqueur drag & dropable
    />
{/* ***************************** MARQERUR LISTE  ******************************  */}

  {markerList} 

</MapView> 
</View>


<View style={[{justifyContent:'space-around',marginTop:50}]}>


{/* BOUTON PRE COMMANDE*/}

 {/* Button GO  */}
      <TouchableOpacity
        style={{

          borderWidth: 2 ,
          borderColor : '#1A33A0',
          borderRadius : 10,
          padding:15,
          margin : 20,
          alignItems : 'center',
          
          
          }}
          onPress={() => Linking.openURL(`maps://app?saddr=${depart}&daddr=${arrive}`)}
      >
        <Text>ACTIVER L'ITINERAIRE</Text>
      </TouchableOpacity>

<View style={{display:'flex', flexDirection:'row'}}>
<TouchableOpacity
        style={{

          borderWidth: 2 ,
          borderColor : '#1A33A0',
          borderRadius : 10,
          padding:15,
          margin : 20,
          alignItems : 'center',
          width:150,
          display:'inline'
          
          }}
          onPress={() => Linking.openURL(`maps://app?saddr=${depart}&daddr=${arrive}`)}
      >
        <Text> Modifier l'itinéraire</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{

          borderWidth: 2 ,
          borderColor : '#1A33A0',
          borderRadius : 10,
          padding:15,
          margin : 20,
          alignItems : 'center',
          width:150,
          
          }}
          onPress={() => props.navigation.navigate('PreCommande')}
      >
        <Text style={{marginTop:10}}> COMMANDER </Text>
      </TouchableOpacity>
</View>
   


</View>

<View style={styles.bloc}>


</View>


 </View>
)    
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
  button : {
    backgroundColor: '#052640', 
    alignItems :'center',
    justifyContent: 'center', 
    borderRadius: 10, 
    width: 150, 
    height: 40,  
  }, 

  bloc:{
marginTop: 15,
marginBottom:15,
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

      button3:{
        borderWidth : 2 ,
        borderColor : 'black',
        borderRadius : 20,
        padding:2,
        margin :10,
        backgroundColor :'#2294DF',
        alignItems : 'center',
        
        },

  text:{
    fontSize:20 ,
    color:'black',
   
    margin :0,
  
  },

  text2:{
    fontSize:20 ,
    color:'white',
   
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
backgroundColor: '#93CAEF',

  },

  icon:{
padding: 10,
margin:10,
color:"#2E43D8",

  },
  
  
  })

    


