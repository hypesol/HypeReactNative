import React from 'react';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function (Stack){
    return(
        <>
        {/* <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Home" component={Home} /> */}
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
        </>
    )
}