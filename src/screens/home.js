import { View, Text, StyleSheet,Image,FlatList, useAnimatedValue } from 'react-native'

import React from 'react'
const Post=[
  {
    name: "Usama",
    likes:30,
    share: 2,
},
{
  name: "Rizwan",
  likes:30,
  share: 2,
},
{
  name: "Bilal",
  likes:30,
  share: 2,
},
]

const Home = ()=> {
 
  const __renderPost=({item})=>(
    <View style={styles.card}>
   <View style={{alignItems:'center',height:50}}><Text>{item.name}</Text>
   </View>
   <View style={{height:300, backgroundColor: 'white'}}>
  
   </View>
   <View style={{justifyContent:'space-between',flex:1,flexDirection:'row',height:100, padding:10,alignItems:"flex-end"}}>
   <Text>❤Likes:{item.likes}</Text>
   <Text>✌Share:{item.share}</Text>
   </View>
   </View>
  );
  return (
    
    <View  style={{flex:2}}>
      <View style={{backgroundColor:'#ffafff', flex:0.5,alignContent:'center'}}>
       <Image
        source={require('../assets/cover.png')}
        style={{height:150,width:430, }}      
      
       />
            <Text style={styles.text}>Players</Text>
      </View>
      <View style={{backgroundColor:'#ffafcc', flex:1.3}}>
        <FlatList
          data={Post}
          renderItem={__renderPost}
        />
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    text:{
        color:'#363537',
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        paddingTop:20  
    },
    card:{
      height:450,
      backgroundColor:'purple',
      padding: 10,
      margin:10,
      flex: 2,
      borderRadius:40
    }
});
export default Home