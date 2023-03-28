import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'

const MyProfile = () => {
  return (
    <SafeAreaView style={{flex:2}}>
    <View style={{flex:1}}>
      <View style={{flex:0.5,backgroundColor:'red'}}>
      <Text>MyProfile</Text>
      </View>
      <View style={{flex: 0.5, backgroundColor: 'yellow'}}>

      </View>

      </View>
      </SafeAreaView>
  )
}

export default MyProfile