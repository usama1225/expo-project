import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useState,useEffect } from 'react';

const RegisterUser = (navigation) => {
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
  return (
    <View>
      <TextInput
      placeholder='name'
      />
    </View>
  )
}

export default RegisterUser