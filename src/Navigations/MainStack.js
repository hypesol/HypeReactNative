import React from 'react';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlantShop from '../Screens/PlantShop/PlantShop';
import PlantDetails from '../Screens/PlantShop/PlantDetail'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false }}>
      <Stack.Screen name="Profile" component={PlantShop} />
      <Stack.Screen name="PlantDetails" component={PlantDetails} />
    </Stack.Navigator>
  );
  

export default function (Stack){
    return(
        <>
        {/* <Stack.Screen name="Profile" component={PlantShop} />
        <Stack.Screen name="PlantDetails" component={PlantDetails} /> */}

        <Tab.Navigator screenOptions={{headerShown: false }}>
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="HomeStack" component={HomeStack} />
        </Tab.Navigator>
        </>
    )
}