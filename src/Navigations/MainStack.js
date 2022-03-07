import React from 'react';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlantShop from '../Screens/PlantShop/PlantShop';
import PlantDetails from '../Screens/PlantShop/PlantDetail'

const Tab = createBottomTabNavigator();

export default function (Stack){
    return(
        <>
        {/* <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Home" component={Home} /> */}
        <Tab.Navigator>
            <Tab.Screen name="Home" component={PlantShop} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="PlantDetails" component={PlantDetails} />
        </Tab.Navigator>
        </>
    )
}