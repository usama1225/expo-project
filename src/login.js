import { Text, View, Image, StyleSheet, TextInput,SafeAreaView,TouchableOpacity, ScrollView, Button, Alert } from 'react-native'
import React, { useState,Component,useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getIsUserLoggedIn } from './utils/help';
const Login = ({navigation}) => {
    const [playerEmail,setPlayerEmail]= useState("");
    const [playerPassword,setPlayerPassword]= useState("");

    useEffect (()=>{
      getIsUserLoggedIn().then((response)=>{
        if(response == "true"){
        navigation.replace('tab');
        }
      });
    },[]);

    const onLoginPress = ()=>{

const auth = getAuth();
signInWithEmailAndPassword(auth, playerEmail, playerPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Alert.alert("Successfully Registered")
    navigation.replace('tab')
  })
  .catch((error) => {
    
    Alert.alert(error.message);
  });
    }


    return (
      <ScrollView
      style={{flex: 2, backgroundColor: '#ffff'}}
      showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
         
        <View style={{ flex:0.5, backgroundColor:'#ffafcc',justifyContent:'center',alignItems:'center'}}>
        <Image
        style={{height:200, width:200 }}
        source={require("./assets/logo2.png")}
        />
        <Text style={{fontSize:28,fontWeight:'bold',color:'#363537'}}>Paradise Cricket Team</Text>
      </View>
      
      <View style={{flex:1.5, backgroundColor:'#ffafcc'}}>
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
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          secureTextEntry={true}
          onChangeText={(text)=> setPlayerPassword(text)}
          />
          <TouchableOpacity onPress={onLoginPress}>
            <Text style={styles.button}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('registration')}}>
            <Text style={styles.button}>
              Register
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text style={{color:"#363537",paddingTop:25,paddingHorizontal:130, fontSize:17}}>Forget Password?</Text>
          </TouchableOpacity>
        
      </View>
      
      </ScrollView>
    )
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
});
export default Login