import React from 'react';
import {View, Text} from 'react-native';
import {Button,Input } from 'react-native-elements';







export default function ajoutArticlePage(props) {

  const [article, setArticle] = useState('');
  const [price, setPrice] = useState('');
  const [quantite, setQuantite] = useState('');
    return (

      <View>

<Button title="Mon Store"
        onPress={() => props.navigation.navigate('MonStore')}
      />

<Input
        containerStyle={{ marginBottom: 25, width: '70%' }}
        inputStyle={{ marginLeft: 10 }}
        placeholder='article'
        
        onChangeText={(val) => setArticle(val)}
      />

<Input
        containerStyle={{ marginBottom: 25, width: '70%' }}
        inputStyle={{ marginLeft: 10 }}
        placeholder='price'
      
        onChangeText={(val) => setPrice(val)}
      />

<Input
        containerStyle={{ marginBottom: 25, width: '70%' }}
        inputStyle={{ marginLeft: 10 }}
        placeholder='quantité'
      
        onChangeText={(val) => setQuantite(val)}
      />


<Button title="Ajouter un Article"
        // onPress={() => props.navigation.navigate('ajoutArticlePage')}
        onPress={async () => {
         
            var rawResponse = await fetch("http://192.168.248.50:3000/myarticles", {
              method: 'POST',
              body: data
            });
            var response = await rawResponse.json();
            if (!response.error) {
              props.onSnap(response);
            }
          
          }
        }
      />
<Text>
PAGE D'AJOUT ARTICLE STORE
</Text>


</View>

    ) 
  }