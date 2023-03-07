import { Text, View, Image, StyleSheet, TextInput,SafeAreaView,TouchableOpacity, ScrollView, Button } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
const Login = ({navigation}) => {
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
          />

<TextInput
          style={styles.input}
          placeholder="Password"
          textAlign='center'
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          />
          <TouchableOpacity onPress={()=>{navigation.navigate('tab')}}>
            <Text style={styles.button}>
              Login
            </Text>
          </TouchableOpacity>
          <Text style={{padding:40,color:'black', }}>Don't have an account?  </Text><Button title='Signup' onPress={()=>{navigation.navigate('registration')}}/>
          <TouchableOpacity>
            <Text style={{color:"#363537",paddingHorizontal:130, fontSize:17}}>Forget Password?</Text>
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