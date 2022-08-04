import React, {useState, useEffect} from 'react' ;
import { View,Text,TouchableOpacity,StyleSheet, ScrollView} from 'react-native' ;
import {Button,Overlay, Input,ListItem, Tab} from 'react-native-elements';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import * as Location from 'expo-location';
import { FontAwesome } from '@expo/vector-icons'; 
import  MapViewDirections from'react-native-maps-directions'


// import AsyncStorage from '@react-native-async-storage/async-storage';


// import AsyncStorage from '@react-native-async-storage/async-storage';

// pour itineraire https://www.npmjs.com/package/react-native-maps-directions


export default function Map(props) {
// ***************************** ETATS ****************************** 

        const [currentLatitude, setCurrentLatitude] = useState(0) ; 
        const [currentLongitude, setCurrentLongitude] = useState(0) ;
        const [isOpen, setIsOpen] = useState(false) ;
        const [magasin,setMagasin] = useState('');
        const [stateLocation, setStateLocation] = useState([])
        const [waypoints , setWaypoints] = useState([]);
        const [commercantList , setCommercantList] = useState([]);
      Geocoder.init("AIzaSyD5OG3mJyZ7ogU9wiuUmngHz2GOvBr9SqU", {language : "fr"})



var waypointsTest = [{
  nom:'lidl',
  horaire: '10h-17h',
  latitude:  48.866667,  
  statut: 'surface',
  longitude: 2.355555,
  coordinate: '48.866667, 2.355555'
},{
  nom:'sushi',
  horaire: '10h-17h',
  statut: 'asiatique',
  latitude:  48.866667,  
  longitude: 2.37,
  coordinate: '48.866667, 2.37'

}]


// ***************************** ASK & SET localistaion ****************************** 

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          Location.watchPositionAsync({distanceInterval: 10}, (location) => { setCurrentLatitude(location.coords.latitude), setCurrentLongitude(location.coords.longitude)});

            var rawResponse = await fetch("http://192.168.0.109:3000/map", {
              method: 'POST',
              body: 'essai'
            });
            
             rawResponse = await rawResponse.json();

            var newTab= [];
              for (let i = 0; i < rawResponse.commercantAfficher.length; i++) {

                var location = rawResponse.commercantAfficher[i].address ; 
                var tryIt =   await Location.geocodeAsync(location) ;
                if(tryIt != 0){

                   newTab = [...rawResponse.commercantAfficher]
                   newTab[i].address = {latitude  :tryIt[0].latitude,longitude : tryIt[0].longitude }
                   setCommercantList(newTab)
            }
            }
  

          // setWaypoints(response.commercant)
          // setCurrentLatitude(response.adresse);
          // setCurrentLongitude(response.adresse); 
      })();  
} ,[]) ;
      
 
console.log('essaie',commercantList);




    // AsyncStorage.getItem("POI", function(error, data) {
    //   var dataParse = JSON.parse(data) ;
    //  if (dataParse !== null) {
    //   dataParse.map((poi,i)=>{
    //     dispatch({
    //       type:'POI/setPOI',
    //       payload: {                           STORE
    //         title:poi.title,
    //         description:poi.description,
    //         latitude:poi.latitude,
    //         longitude:poi.longitude
    //       }
    //      }) 
    //   })
    //  }

    // });







// ***************************** CLOSE the overlay ****************************** 

    var closeOverlay = () => {
        setIsOpen(false) 

}

// ***************************** ADD Lat/Lng to State ****************************** 

   var test = (bool,nom,horaire,statut) => {

    setIsOpen(bool) ;
console.log(nom,horaire,statut);
        
}
// ***************************** ADD commercant to itinéraire ****************************** 


function testAddToItinéraire (magasin) {

    var isInside = false;


    for (let i = 0; i < waypointsTest.length; i++) {

        if (waypointsTest[i].status == magasin.statut) {

          waypointsTest.splice(i,1,magasin) ;
            isInside = true ;
            
        }
    }

     if (!isInside) {
        itineraire.push(magasin)
     }


}

// ***************************** SHOW ALL THE MARKER  ****************************** 

if (commercantList != 0 ) {

  var markerList = commercantList.map((commercant,i)=>{
  console.log(commercant.address);
    return <Marker key={i} pinColor='blue' onPress={()=>test(true,commercant.enseignecommerciale,commercant.hours[0],commercant.type)} title={commercant.enseignecommerciale} coordinate={{latitude :commercant.address.latitude, longitude: commercant.address.longitude}} description={commercant.hours[0]}/>
     })     

}



if (commercantList != 0 ) {

    var directions = 
    <MapViewDirections
    origin={commercantList[0].address}
    waypoints={waypointsTest}
    destination={commercantList[0].address}
    mode="DRIVING"
    optimizeWaypoints={true}
    // onReady={(result)=> {console.log(result);}}
    timePrecision="now"
    apikey='AIzaSyD5OG3mJyZ7ogU9wiuUmngHz2GOvBr9SqU'
    strokeWidth={3}
  />
}

   

   


// ***************************** RETURN ****************************** 
 
return(


 <View>

{/* ***************************** OVERLAY   ******************************  */}
<View style={{height:400}}>



<Overlay isVisible={isOpen} overlayStyle={{width: '70%', justifyContent:'center', alignItems:'center'}} onBackdropPress={closeOverlay}>

              <Text>{magasin.nom} </Text>
              <Text>{magasin.statut} </Text>
              <Text>{magasin.horaire} </Text>

                
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

{directions}



{/* ***************************** MARQERUR POS   ******************************  */}



<Marker coordinate={{
        latitude: currentLatitude , longitude: currentLongitude
      }}

     title="Hello"
     description="I am here"
     draggable  // Rendre le marqueur drag & dropable
    />


<Marker coordinate={{
        latitude: 40.4774107 , longitude:  0.4663123
      }}

     title="Hello"
     description="I am here"
     draggable  // Rendre le marqueur drag & dropable
    />
{/* ***************************** MARQERUR LISTE  ******************************  */}

  {markerList} 

</MapView> 
</View>


<View style={[{justifyContent:'space-around'}]}>

{/* BOUTON MISE A JOUR*/}


<TouchableOpacity
        style={styles.button3}
        onPress={() => props.navigation.navigate('ConfigurateurItineraire')}
      >
        <Text>METTRE A JOUR L'ITINERAIRE</Text>
      </TouchableOpacity>

{/* BOUTON PRE COMMANDE*/}

      <TouchableOpacity
        style={styles.button3}
        onPress={() => props.navigation.navigate('PreCommande')}
      >
        <Text>PRE-COMMANDER CHEZ LES COMMERCANTS</Text>
      </TouchableOpacity>

 {/* Button GO  */}
      <TouchableOpacity
        style={styles.button3}
        onPress={() => props.navigation.navigate('Navigation')}
      >
        <Text>ACTIVER L'ITINERAIRE</Text>
      </TouchableOpacity>


</View>



<Text>Adaptez votre itinéraire en fonction de vos envies </Text>

<Button title="START"
        onPress={() => props.navigation.navigate('PreCommande')}
      />



{/* *****************************  LISTE COMMERCANT CHOISI  ******************************  */}

{
    // listCommercant.map((l, i) => (
    //   <ListItem key={i} bottomDivider>
    //    <Avatar source={{uri: l.avatar_url}} />  {/* photo du commercant */}
    //     <ListItem.Content>
    //       <ListItem.Title>{l.name}</ListItem.Title> {/* nom du commercant */}
    //       <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
    //     </ListItem.Content>
    //   </ListItem>
    // ))
  }

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

    


