import React, {useState, useEffect} from 'react' ;
import { View,Text} from 'react-native' ;
import {Button,Overlay, Input,ListItem} from 'react-native-elements';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import * as Location from 'expo-location';
import { FontAwesome } from '@expo/vector-icons'; 
import  MapViewDirections from'react-native-maps-directions'
import {store} from './reducers/redux' ;


// import AsyncStorage from '@react-native-async-storage/async-storage';


// var socket = socketIOClient("http://172.20.10.2:3000");


// pour itineraire https://www.npmjs.com/package/react-native-maps-directions


export default function Map(props) {




// ***************************** ETATS ****************************** 

        const [currentLatitude, setCurrentLatitude] = useState(0) ; 
        const [currentLongitude, setCurrentLongitude] = useState(0) ;
        // const [commercantList, setCommercantList] = useState([]) ;


     
        const [isOpen, setIsOpen] = useState(false) ;
        const [textDesc , setTextDesc] = useState('') ;
        const [nomMagasin,setNomMagasin] = useState('');
     


  const commercantList = [{
    nom:'Macdo',
    horaire: '10h-17h',
    latitude:  48.9,  
    longitude: 2.333333
  },{
    nom:'burgerKing',
    horaire: '10h-17h',
    latitude:  48.9,  
    longitude: 2.34
  },{
    nom:'lidl',
    horaire: '10h-17h',
    latitude:  48.866667,  
    longitude: 2.355555,
    coordinate: '48.866667, 2.355555'
  },{
    nom:'sushi',
    horaire: '10h-17h',
    latitude:  48.866667,  
    longitude: 2.37
  },{
    nom:'carotte',
    horaire: '10h-17h',
    latitude:  48.866667,  
    longitude: 2.32
  },
] ;



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

          // // setCommercantList(response.commercant);
          // // setCurrentLatitude(response.adresse);
          // // setCurrentLongitude(response.adresse); 
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
        setAddPOI(false) ;
}

// ***************************** ADD Lat/Lng to State ****************************** 

   var test = (bool,nom) => {

    setIsOpen(bool) ;
    console.log(nom);
        
}
// ***************************** ADD commercant to itinéraire ****************************** 


function testAddToItinéraire (title , description,) {
     

}

// ***************************** SHOW ALL THE MARKER  ****************************** 
        
 var markerList =  commercantList.map((commercant,i)=>{

return <Marker key={i} pinColor='blue' onPress={()=>test(true,commercant.nom)} title={commercant.nom} description={commercant.horaire} coordinate={{latitude: commercant.latitude, longitude: commercant.longitude}}/>
 })        


// ***************************** RETURN ****************************** 
 
return(



 <View style= {{flex: 1}}>

{/* ***************************** OVERLAY   ******************************  */}
<View style={{height:400}}>



<Overlay isVisible={isOpen} overlayStyle={{width: '70%'}} onBackdropPress={closeOverlay}>
              <Text>{} </Text>
        
                <Input
                   placeholder='Description '
                   onChangeText={(value) => setTextDesc(value)} 
                   value={textDesc} 
                   />
                
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
                // onPress={() => testAddToItinéraire(textTitle, textDesc)}
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
    origin={commercantList[3]}
    // waypoints={commercantList[2]}
    destination={commercantList[4]}
    mode="WALKING"
    optimizeWaypoints={true}
    onReady={(result)=> {console.log(result);}}
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


