import React, { Component }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Profile } from './src/Screens';
const Stack = createNativeStackNavigator();
// import Home from './src/Screens/Profile/Profile';
class App extends Component {
  render(){
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Profile" screenOptions={{header: () => null}}>
          <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}
}
export default App;
