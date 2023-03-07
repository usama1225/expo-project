import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import Home from '../src/home';
import Profile from '../src/profile';
import Score from '../score/score';
import Store from '../src/store';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
  
    <Tab.Navigator
      independent={true}
      
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          color="black";
          
         
          if (route.name === 'Home') {
            iconName='home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          
          } else if (route.name === 'Store'){
            iconName='archive';
          } else if (route.name === 'Score'){
            iconName='megaphone';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        
   
      
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Tab.Screen name="Store" component={Store} options={{headerShown:false}}/>
      <Tab.Screen name="Score" component={Score} options={{headerShown:false}}/>
      <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
    
      
    </Tab.Navigator>
    
  );
}
