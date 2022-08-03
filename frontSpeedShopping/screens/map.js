import React, {useState, useEffect} from 'react' ;
import { View,Text} from 'react-native' ;
import {Button,Overlay, Input,ListItem, Tab} from 'react-native-elements';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import * as Location from 'expo-location';
import { FontAwesome } from '@expo/vector-icons'; 
import  MapViewDirections from'react-native-maps-directions'



// import AsyncStorage from '@react-native-async-storage/async-storage';



// pour itineraire https://www.npmjs.com/package/react-native-maps-directions


export default function Map() {
// ***************************** ETATS ****************************** 

        const [currentLatitude, setCurrentLatitude] = useState(0) ; 
        const [currentLongitude, setCurrentLongitude] = useState(0) ;


        const [isOpen, setIsOpen] = useState(false) ;
        const [magasin,setMagasin] = useState('');
        const [waypoints , setWaypoints] = useState([]);

  const commercantList = [{
    nom:'Macdo',
    horaire: '10h-17h',
    statut: 'fast-food',
    latitude:  48.9,  
    longitude: 2.333333,
    coordinate: '48.866667, 2.333333'

  },{
    nom:'burgerKing',
    horaire: '10h-17h',
    statut: 'fast-food',
    latitude:  48.85,  
    longitude: 2.34,
    coordinate: '48.866667, 2.34'

  },{
    nom:'lidl',
    horaire: '10h-17h',
    latitude:  48.866667,  
    statut: 'fast-food',
    longitude: 2.355555,
    coordinate: '48.866667, 2.355555'
  },{
    nom:'sushi',
    horaire: '10h-17h',
    statut: 'asiatique',
    latitude:  48.866667,  
    longitude: 2.37,
    coordinate: '48.866667, 2.37'

  },{
    nom:'carotte',
    statut: 'traiteur',
    horaire: '10h-17h',
    latitude:  48.866667,  
    longitude: 2.32,
    coordinate: '48.866667, 2.32'

  },
] ;


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

}
// ,{
//   nom:'carotte',
//   statut: 'traiteur',
//   horaire: '10h-17h',
//   latitude:  48.866667,  
//   longitude: 2.32,
//   coordinate: '48.866667, 2.32'

 ]


// ***************************** ASK & SET localistaion ****************************** 

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          Location.watchPositionAsync({distanceInterval: 10}, (location) => { setCurrentLatitude(location.coords.latitude), setCurrentLongitude(location.coords.longitude) 

          // var data = await fetch("http://192.168.0.109:3000/map") ;
          // var response = await data.json();



          // setWaypoints(response.commercant)
          // setCurrentLatitude(response.adresse);
          // setCurrentLongitude(response.adresse); 
         });
        
      })();
    }) ;
      
 


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
    setMagasin({
        nom:nom,
        horaire:horaire,
        statut:statut
    })
        
}
// ***************************** ADD commercant to itinéraire ****************************** 


function testAddToItinéraire (magasin) {

    var isInside = false;


    for (let i = 0; i < waypointsTest.length; i++) {

        if (waypointsTest[i].status == magasin.statut) {

          waypointsTest.splice(i,1,magasin) ;
            isInside = true ;
            
        }
        console.log('test',waypointsTest);
    }

     if (!isInside) {
        itineraire.push(magasin)
     }


}

// ***************************** SHOW ALL THE MARKER  ****************************** 
        
 var markerList =  commercantList.map((commercant,i)=>{

return <Marker key={i} pinColor='blue' onPress={()=>test(true,commercant.nom,commercant.horaire)} title={commercant.nom} description={commercant.horaire} coordinate={{latitude: commercant.latitude, longitude: commercant.longitude}}/>
 })        


// ***************************** RETURN ****************************** 
 
return(



 <View style= {{flex: 1}}>

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

<MapViewDirections
    origin={commercantList[0]}
    waypoints={waypointsTest}
    destination={commercantList[0]}
    mode="DRIVING"
    optimizeWaypoints={true}
    // onReady={(result)=> {console.log(result);}}
    timePrecision="now"
    apikey='AIzaSyD5OG3mJyZ7ogU9wiuUmngHz2GOvBr9SqU'
    strokeWidth={3}
  />



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

<Text>Adaptez votre itinéraire en fonction de vos envies </Text>


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


