import React from 'react';
import { View ,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Profile, Splash1 } from '../Screens';

const Stack = createNativeStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Home" screenOptions={{header: () => null}}> */}
            <Stack.Navigator initialRouteName="Splash1">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Splash1" component={Splash1} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;
