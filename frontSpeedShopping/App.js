
import React from 'react';
import {LogBox, View, Pressable} from 'react-native';
LogBox.ignoreLogs(['Warning:...']);
import {Button,Input } from 'react-native-elements';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import accueil from './screens/accueil'
import ajoutArticlePage from './screens/ajoutArticlePage'
import commandesCommercant from './screens/commandesCommercant'
import homePage from './screens/homePage'
import mapPage from './screens/mapPage'
import monStore from './screens/monStore'
import navigationPage from './screens/navigationPage'
import paiement from './screens/paiement'
import preCommandePage from './screens/preCommandePage'
import profilClient from './screens/profilClient'
import profilCommercant from './screens/profilCommercant'
import signInPage from './screens/signInPage'
import signUpPage from './screens/signUpPage'
import newCommercant from './screens/newcommercant'
import poissonerie from './screens/poissonerie'
import epicerie from './screens/epicerie'
import panier from './screens/panier'





import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {store} from './reducers/redux' ;

import { Ionicons } from '@expo/vector-icons';

import {Provider} from 'react-redux';

import {createStore, combineReducers}  from 'redux';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/*Creation du naviguateur TAB dans la page Itineraire "Configurateur"*/

// const configurateur = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color }) => {
//           let iconName;

//           if (route.name == 'Speed Selection') {
//             iconName = 'null';
//           } else if (route.name == 'Gérer la selection') {
//             iconName = 'null';
//           }
        

  
//           return <Ionicons name={iconName} size={25} color={color} />;
//         },
//         })}
//       tabBarOptions={{
//         activeTintColor: '#eb4d4b',
//         inactiveTintColor: '#FFFFFF',
//         style: {
//           backgroundColor: '#130f40',
//         }
//       }}
//     >
//       <Tab.Screen name="Speed Selection" component={mapPage} />
//       <Tab.Screen name="Gérer la selection" component={itinerairePage} />
//     </Tab.Navigator>
//   );
//     }


    /*Creation du naviguateur TAB dans la page  profilUser "monProfilUser" */

    const monProfilUser = () => {
      return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;
    
              if (route.name == 'Profil') {
                iconName = 'information-circle';
              }else if (route.name == 'Home') {
                iconName = 'home';
              }else if (route.name == 'Panier') {
                iconName = 'md-basket-outline';
              }
      
              return <Ionicons name={iconName} size={25} color={color} />;
            },
            })}
          tabBarOptions={{
            activeTintColor: '#eb4d4b',
            inactiveTintColor: '#FFFFFF',
            style: {
              backgroundColor: '#2294DF',
            }
          }}
        >
          <Tab.Screen name="Profil" component={profilClient} />
          <Tab.Screen name="Home" component={homePage} />
          <Tab.Screen name="Panier" component={panier} />
          
        </Tab.Navigator>
      );
        }

       
     /*Creation du navigateur STACK dans la page store "gestionStore" */
     const gestionStore = () => {
      return (
      <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen name="MonStore" component={monStore} />
        <Stack.Screen name="MesArticles" component={ajoutArticlePage} />

     </Stack.Navigator>
      

      )
     }


    /*Creation du navigateur TAB dans la page profilVendeur "monProfilVendeur"*/

    
    const monProfilVendeur = () => {
      return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;
    
              if (route.name == 'Mes Commandes') {
                iconName = 'document-text';
              } else if (route.name == 'Mon Store') {
                iconName = 'list';
              }else if (route.name == 'Mon Compte') {
                iconName = 'information-circle';
              }
      
              return <Ionicons name={iconName} size={25} color={color} />;
            },
            })}
          tabBarOptions={{
            activeTintColor: '#eb4d4b',
            inactiveTintColor: '#FFFFFF',
            style: {
              backgroundColor: '#2294DF',
            }
          }}
        >
          <Tab.Screen name="Mon Compte" component={profilCommercant} />
          <Tab.Screen name="Mes Commandes" component={commandesCommercant} />
          <Tab.Screen name="Mon Store" component={gestionStore} />
        </Tab.Navigator>
      );
        }



    

    


export default function App() {
  return (
    
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Accueil" component={accueil} />
      <Stack.Screen name="Home" component={homePage} />
      <Stack.Screen name="SignIn" component={signInPage} />
      <Stack.Screen name="SignUp" component={signUpPage} />
      <Stack.Screen name="PreCommande" component={preCommandePage} />
      <Stack.Screen name="poissonerie" component={poissonerie} />
      <Stack.Screen name="epicerie" component={epicerie} />
      <Stack.Screen name="panier" component={panier} />

      <Stack.Screen name="Navigation" component={navigationPage} /> 
      <Stack.Screen name="ConfigurateurItineraire" component={mapPage} />
      <Stack.Screen name="Paiement" component={paiement} />
      <Stack.Screen name="MonProfil" component={monProfilUser} />
      <Stack.Screen name="MonStore" component={monProfilVendeur} />
      <Stack.Screen name="newCommercant" component={newCommercant} />

    </Stack.Navigator>
  </NavigationContainer>
</Provider>
  
);
}

