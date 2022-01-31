import React from 'react';
import { View ,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Profile, Splash1, PlantShop, PlantDetail } from '../Screens';
import {FoodHome, Restaurant, OrderDelivery} from '../Screens/FoodApp';
import Login from '../Screens/Login/Login';
import Signup from '../Screens/Signup/Signup';
import AuthStack from './AuthStack';
import MainStack from './MainStack';


// import Tabs from '../Screens/Navigation/tabs';


const Stack = createNativeStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {false ? MainStack(Stack) : AuthStack(Stack)}
                {/* {AuthStack(Stack)}
                {MainStack(Stack)} */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;
