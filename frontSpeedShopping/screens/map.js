import React, {useState, useEffect} from 'react' ;
import { View} from 'react-native' ;
import {Button,Overlay, Input,ListItem} from 'react-native-elements';
import MapView, {Marker} from 'react-native-maps';
import {useSelector, useDispatch} from 'react-redux';
import * as Location from 'expo-location';
import { FontAwesome } from '@expo/vector-icons'; 

// import AsyncStorage from '@react-native-async-storage/async-storage';
import socketIOClient from "socket.io-client";

// var socket = socketIOClient("http://172.20.10.2:3000");


// pour itineraire https://www.npmjs.com/package/react-native-maps-directions


function MapScreen(props) {


// ***************************** ETATS ****************************** 

        const [currentLatitude, setCurrentLatitude] = useState(0) ; 
        const [currentLongitude, setCurrentLongitude] = useState(0) ;
        const [listMarker, setListMarker] = useState([]) ;


        const [latitude , setLatitude] = useState(0);
        const [longitude , setLongitude] = useState(0);
        const [addPOI, setAddPOI] = useState(false) ;
        const [isOpen, setIsOpen] = useState(false) ;
        const [listPOI, setListPOI] = useState([]) ;
        const [textTitle , setTextTitle] = useState('') ;
        const [textDesc , setTextDesc] = useState('') ;
        const dispatch = useDispatch() ;
        const test = useSelector((state)=> state ) ;


// ***************************** ASK & SET localistaion ****************************** 

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
         Location.watchPositionAsync({distanceInterval: 10}, (location) => { setCurrentLatitude(location.coords.latitude), setCurrentLongitude(location.coords.longitude) 
          socket.emit("sendPosition",location.coords.latitude , location.coords.longitude) ; 
        });
        
      })();


    AsyncStorage.getItem("POI", function(error, data) {
      var dataParse = JSON.parse(data) ;
     if (dataParse !== null) {
      dataParse.map((poi,i)=>{
        dispatch({
          type:'POI/setPOI',
          payload: {
            title:poi.title,
            description:poi.description,
            latitude:poi.latitude,
            longitude:poi.longitude
          }
         }) 
      })
     }

    });

    }, []) ;



// ***************************** CLOSE the overlay ****************************** 

    var closeOverlay = () => {
        setIsOpen(false) 
        setAddPOI(false) ;
}

// ***************************** ADD Lat/Lng to State ****************************** 

   var selectPOI = (e) => {
        if (addPOI) {
                setLatitude(e.nativeEvent.coordinate.latitude)
                setLongitude(e.nativeEvent.coordinate.longitude)
        setIsOpen(true) ;
        }
}
// ***************************** ADD commercant to itinéraire ****************************** 


function testAddToItinéraire (title , description,) {
     

}

// ***************************** SHOW ALL THE MARKER  ****************************** 
        
 var markerList =  test.savePOI.map((POI,i)=>{
        return <Marker key={i} pinColor='blue' title={POI.title} description={POI.description} coordinate={{latitude: POI.latitude, longitude: POI.longitude}}/>
 })        


// ***************************** RETURN ****************************** 
 
return(

 <View style= {{flex: 1}}>

{/* ***************************** OVERLAY   ******************************  */}


<Overlay isVisible={isOpen} overlayStyle={{width: '70%'}} onBackdropPress={closeOverlay}>
                <Input
                inputStyle= {{flex:1}}
                placeholder='Titre'
                onChangeText={(value) => setTextTitle(value)} 
                value={textTitle} />
        
                <Input
                   placeholder='Description '
                   onChangeText={(value) => setTextDesc(value)} 
                   value={textDesc} />
                
                <Button
                icon={
                <FontAwesome
                    name="map-marker"
                    size={20}
                    color="#ffffff"
                 />}
                buttonStyle={{backgroundColor:'#eb4d4b'}}
                title="Add POI"
                type="solid"
                // onPress={() => testAddToItinéraire(textTitle, textDesc)}
                />
</Overlay>

{/* ***************************** MAP INITIAL SETTING  ******************************  */}

<MapView style={{flex : 1}}
onPress={(e) =>{selectPOI(e)}}
  showsTraffic={true}
 initialRegion={{
   latitude:  48.866667,  // pour centrer la carte, REUSSIER A LE FAIRE SUR POS UTILISATEUR
   longitude: 2.333333,
   latitudeDelta: 0.0922,  // le rayon à afficher à partir du centre
   longitudeDelta: 0.0421,
}} >




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
<Text>Adaptez votre itinéraire en fonction de vos envies </Text>


{/* *****************************  LISTE COMMERCANT CHOISI  ******************************  */}

{
    listCommercant.map((l, i) => (
      <ListItem key={i} bottomDivider>
       <Avatar source={{uri: l.avatar_url}} />  {/* photo du commercant */}
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title> {/* nom du commercant */}
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }

 </View>


)
    
    
}





export default MapScreen ;