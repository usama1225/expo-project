import React from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { removeIsUserLoggedIn } from "../utils/help";
const playersData=[
    {title:"Player 1", subtitle:"subtitle 1"},
    {title:"Player 2", subtitle:"subtitle 2"},
    {title:"Player 3", subtitle:"subtitle 3"},
    {title:"Player 4", subtitle:"subtitle 4"},
    {title:"Player 5", subtitle:"subtitle 5"},
    {title:"Player 6", subtitle:"subtitle 6"},
];
   function Player({navigation}){
    const funcLogout = ()=>{
        removeIsUserLoggedIn();
        navigation.replace('login');
    };
    const __renderItem = ({item})=>(
       <View>
        <TouchableOpacity style={{
            padding:10, margin:10, backgroundColor:"rgba(212,22,240,0.5)",
            borderRadius: 20,
        }} 
        onPress={()=>navigation.navigate("Store",{data:item})}>
            <Text style={{ fontSize:24,fontWeight:"bold",color:"white"}}>
                {item.title}
            </Text>
            <Text style={{ fontSize:20,fontWeight:"medium",color:"white"}}>
                {item.subtitle}
            </Text>
           
        </TouchableOpacity>
        <TouchableOpacity onPress={funcLogout}>
            <Text style={{alignContent:"center",justifyContent:"center",backgroundColor:"pink", fontSize:20}} >
                Logout
                </Text>
        </TouchableOpacity>
        </View>
    );
    return  <FlatList data={playersData} renderItem={__renderItem} />
   }
   export default Player;