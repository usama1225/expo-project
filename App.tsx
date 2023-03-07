
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/login';
import Registration from './src/registration';
import Tab from './Tab/tab';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown:false}}
          
        />
        <Stack.Screen name="registration" component={Registration} options={{headerShown:false}} />
        <Stack.Screen name="tab" component={Tab} options={{headerShown:false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;