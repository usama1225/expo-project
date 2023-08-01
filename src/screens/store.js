import { View, Text, StyleSheet,FlatList } from 'react-native'
import React from 'react'

const Store = () => {

  const __renderProducts=()=>{
    <View style={styles.card}>


    </View>
  }
  return (
    <View style={styles.container}>
      <FlatList
       renderItem={__renderProducts}
      />
    </View>
  
  )
}

const styles=StyleSheet.create({
  card:{
    height:450,
    padding:10,
    backgroundColor:'#00c2d1',
    margin:10,
    flex:2,
    borderRadius:40
  },
  products:{

  }
});
export default Store