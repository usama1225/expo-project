import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Store = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Store</Text>
      <View style={styles.page}>
      
    </View>
    </View>
  
  )
}

const styles= StyleSheet.create({
  title:{
    color: 'red',
    textAlign: 'center',
    padding: '20',
    
  },
  page:{
    height:'70',
    backgroundColor: 'orange',
    padding: 20,
    margin: '20',
  }
});
export default Store