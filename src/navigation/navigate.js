
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from '../login';
import Registration from '../registration';
import Tab from '../../Tab/tab';
import MyProfile from '../screens/MyProfile';

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="login"
          component={Login}
          
          
        />
        <Stack.Screen name="registration" component={Registration}  />
        <Stack.Screen name="tab" component={Tab} />
        <Stack.Screen name='myProfile' component={MyProfile} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default Navigate;