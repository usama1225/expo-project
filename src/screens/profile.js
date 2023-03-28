import { View, Text,Image , StyleSheet, SafeAreaView, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { removeIsUserLoggedIn } from '../utils/help'

const Profile = ({navigation}) => {

    const logoutBtn = ()=>{
        removeIsUserLoggedIn();
        navigation.replace('login');
    }
    const profileBtn = ()=>{
        navigation.navigate('myProfile');
    }

  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
            source={require('../assets/Logo1.png')} 
            style = {{height: 300, width: 300, }}
        />
      </View>
      <View style={styles.btnView}>
            <TouchableOpacity onPress={profileBtn}>
            <Text style={styles.button}>
              My Profile
            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logoutBtn}>
            <Text style={styles.button}>
              Logout
            </Text>
            </TouchableOpacity>
      </View>
    </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 2,
         backgroundColor:'#ffafcc'
        
    },
    btnView:{
        flex:1.7,
        backgroundColor:'red'
       
    }, 
    img: {
        flex:0.7,
        marginHorizontal: 59
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
    }
    
})

export default Profile