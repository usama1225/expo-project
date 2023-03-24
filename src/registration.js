import { Text, View, StyleSheet, Image, SafeAreaView,TextInput, TouchableOpacity, ScrollView, Alert,Button } from 'react-native'
import React, { useState ,useRef ,useEffect} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db,storage, userRef } from './services/firebaseConfig';
import Spinner from 'react-native-loading-spinner-overlay';
import {addDoc,setDoc, doc, collection} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { async } from '@firebase/util';
import { uriToBlob } from './utils/help';




const Registration= ({navigation}) => {
  const [playerName, setPlayerName]= useState("");
  const [playerPassword, setPlayerPassword]= useState("");
  const [playerConfirmPassword, setConfirmPlayerPassword]= useState("");
  const [playerEmail, setPlayerEmail]= useState("");
  const [playerNumber, setPlayerNumber]= useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profilePic, setProfilePic] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


 

  
  const SignUpPressed = async (uid)=>{
    if(playerEmail === ""){
      Alert.alert("Please enter Email");
      return;
    }
    if(playerName === ""){
      Alert.alert("Please enter Name");
      return;
    }
    
    if(playerPassword === ""){
      Alert.alert("Please enter Password");
      return;
    }
    
    if(playerConfirmPassword === ""){
      Alert.alert("Please enter Confirm Password");
      return;
    }
    if(playerPassword !== playerConfirmPassword){
      Alert.alert("Password and Confirm Password not match");
      return;
    }
    if(playerNumber === ""){
      Alert.alert("Please enter Number");
      return;
    }
    if(image === ""){
      Alert.alert("Choose Profile Picture");
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, playerEmail, playerPassword)
    .then((authResponse) => {
      const user = authResponse.user;

      // print authResponse to study and get UID out of it
      console.log(user.uid);

      // try uploading the image
      attemptToUploadData(user.uid);
    })
    .catch((authError) => {
      setLoading(false);
      alert(authError.message);
    });
  };
    const attemptToUploadData = async (uid)=>{

    
    try {
      setLoading(true);
      const blobResponse = await uriToBlob(image);
      const filename = `profile_${Date.now()}`;
      const fileRef = ref(storage, filename);
      const uploadImageResponse = await uploadBytes(fileRef, blobResponse);
      const fileResponse = await getDownloadURL(fileRef);
      const data = {
        firstName: playerName,
        email: playerEmail,
        number: playerNumber,
        profileImgUrl: fileResponse,
      };
      
      const uploadDocument = await setDoc(doc(db, "users", uid), data);
      setLoading(false);
     Alert.alert("Confirmed")
    } catch (error) {
      Alert.alert(error.message);
      setLoading(false);  
    }
  };
    
   // navigation.navigate('tab');
  
return(
<SafeAreaView style={{flex:1.3, backgroundColor:'#ffafcc'}}>
  <View style={{flex:2}}> 
        <View style={{ flex:0.7 ,backgroundColor:'#ffafcc',justifyContent:'center',alignItems:'center'}}>
        <Image
        style={{height:200, width:200 }}
        source={require("./assets/logo2.png")}
        />
        <Text style={{fontSize:28,fontWeight:'bold',color:'#ffff'}}>Paradise Cricket Team</Text>
      </View>
      
      <ScrollView
      style={{flex: 2, marginTop: 10 }}
      showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
        
        <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center' }}>
        {image && <Image source={{ uri: image }} style={{ width: 200,borderRadius:90, marginVertical:20, height: 200 }} />}
        
      <Button title="Choose From Gallary" onPress={pickImage}  />
      
      
    </View>
        
       
      <TextInput
          style={styles.input}
          placeholder="Name"
          textAlign='center'
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          onChangeText={(text)=> setPlayerName(text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Email"
          textAlign='center'
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          onChangeText={(text)=> setPlayerEmail(text)}
          />

<TextInput
          style={styles.input}
          placeholder="Password"
          textAlign='center'
          secureTextEntry= {true}
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          onChangeText={(text)=> setPlayerPassword(text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry= {true}
          textAlign='center'
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          onChangeText={(text)=> setConfirmPlayerPassword(text)}
          
          />
          <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          textAlign='center'
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          onChangeText={(text)=> setPlayerNumber(text)}
          />
          <TouchableOpacity onPress={SignUpPressed}>
            <Text style={styles.button}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <Spinner visible={loading} textContent={"Loading..."} />
          <Text style={{padding:40,color:'black', }}> have an account? <TouchableOpacity onPress={()=>{navigation.navigate('login')}}><Text style={{color:'red',fontSize:15, paddingTop:10}}>Login</Text></TouchableOpacity> </Text>
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


export default Registration