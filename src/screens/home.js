import { View, Text, StyleSheet,Image,FlatList, useAnimatedValue, Alert } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import React, {useEffect,useState} from 'react';
import { db } from '../services/firebaseConfig';

/*const Post=[
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
]*/

const Home = ()=> {
  const [users, setUsers]=useState();
  const scrapData = [];
  useEffect(()=>{
    getDocs(collection(db,"users")).then((response)=>{
      response.forEach((doc)=>{
        scrapData.push(doc.data());
      });
      setUsers(scrapData);
    }).catch((error)=>{
      Alert.alert(error);
    });
  },[]);
 
  const __renderPost=({item})=>(
    <View style={styles.card}>
   <View style={{height:35}}>
     <Image src={item.profileImgUrl} style={{ width: 80, height: 80, alignItems:'flex-start', borderRadius: 50, marginRight: 5}}/>
   
   </View>
   <View style={{alignItems:'center'}}>
   <Text style={{fontSize:20}}>{item.firstName}</Text>
   </View>
   <View style={{height:300,marginTop:30, backgroundColor: 'white'}}>
      <Text> Post will be shown here </Text>
   </View>
   <View style={{justifyContent:'space-between',flex:1,flexDirection:'row',height:100, padding:10,alignItems:"flex-end"}}>
   <Text>❤Likes:20</Text>
   <Text>✌Share:3</Text>
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
          data={users}
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
      backgroundColor:'#00c2d1',
      padding: 10,
      margin:10,
      flex: 2,
      borderRadius:40,
    }
});
export default Home