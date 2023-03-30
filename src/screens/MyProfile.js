import { Text, View, StyleSheet, Image, SafeAreaView,TextInput, TouchableOpacity, ScrollView, Alert,Button } from 'react-native'
import React, { useState ,useRef ,useEffect} from 'react'
import { auth, db,storage, userRef } from '../services/firebaseConfig';
import Spinner from 'react-native-loading-spinner-overlay';
import { setDoc, doc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { async } from '@firebase/util';
import { uriToBlob, saveIsUserLoggedIn ,getUserUid,saveUserUid} from '../utils/help';




const MyProfile= ({navigation}) => {
  const [playerName, setPlayerName]= useState("");
  const [playerEmail, setPlayerEmail]= useState("");
  const [playerNumber, setPlayerNumber]= useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // check if the user session is running
    getUserUid().then((response) => {
      const uid = response;
      const docRef = doc(db, "users", uid);
      getDoc(docRef)
        .then((response) => {
          if (response.exists()) {
            console.log(response.data());
            const user = response.data();
            setUserState(user);
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    });

    // doc(db, "users", "");
  }, []);
  const setUserState = (user) => {
    setPlayerEmail(user.email);
    setPlayerName(user.firstName);
    setPlayerNumber(user.number);
    setImage(user.profileImgUrl);
  };
  const updateData = ()=>{
    Alert.alert('hey het');
  }

 

  
  
    
    
      
  
return(
<SafeAreaView style={{flex:2, backgroundColor:'#ffafcc'}}>
  <View style={{flex:1}}> 
        <View style={{ flex:0.3 ,backgroundColor:'#ffafcc',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:28,fontWeight:'bold',color:'#ffff'}}>Paradise Cricket Team</Text>
      </View>
      
      <ScrollView
      style={{flex: 2,marginBottom:50}}
      showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
        
        <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center' }}>
        {image && <Image  source={{ uri: image }} style={{ width: 200,borderRadius:90, marginVertical:20, height: 200 }} />}
        
      
      
    </View>
        
       
      <TextInput
          style={styles.input}
          value={playerName}
          placeholder="Name"
          textAlign='center'
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          onChangeText={(text)=> setPlayerName(text)}
          />
          <TextInput
          style={styles.input}
          value={playerEmail}
          placeholder="Email"
          textAlign='center'
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          onChangeText={(text)=> setPlayerEmail(text)}
          />

          <TextInput
          style={styles.input}
          value={playerNumber}
          placeholder="Mobile Number"
          textAlign='center'
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          onChangeText={(text)=> setPlayerNumber(text)}
          />
          <TouchableOpacity onPress={updateData}>
            <Text style={styles.button}>
              Update Data
            </Text>
          </TouchableOpacity>
          <Spinner visible={loading} textContent={"Loading..."} />
          </ScrollView>
    
      </View>
      </SafeAreaView>
    
);
  }
const styles=StyleSheet.create({
  input:{
    height: 50,
    margin:18,
    marginHorizontal:30,
    borderWidth: 2,
    borderRadius:25,
    padding: 10,
    borderColor:'#edede9',

  },
  button:{
    height:45,
    backgroundColor:'#f1faee',
    borderWidth: 0,
    borderRadius:15,
    padding:8,
    textAlign:'center',
    fontSize:18,
    marginHorizontal:50,
    marginTop:20,
    color:'#e76f51'

  },
  camera:{
    height:100,
    width:100,
  }
});


export default MyProfile