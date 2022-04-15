import React from 'react';
import { View ,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import {Home, Profile, Splash1, PlantShop, PlantDetail } from '../Screens';
import {FoodHome, Restaurant, OrderDelivery} from '../Screens/FoodApp';
import Login from '../Screens/Login/Login';
import Signup from '../Screens/Signup/Signup';
import ImageUpload from '../Screens/Upload/ImageUpload';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

// import Tabs from '../Screens/Navigation/tabs';

const Stack = createNativeStackNavigator();

function Routes(){
    const stateData = useSelector((state) => state.authReducer.loggedIn );

    // const appState = useSelector((state) => state.user.login);
    console.log("Route", stateData);
    return (
        <NavigationContainer>
            {/* <Stack.Navigator screenOptions={{headerShown: true }}> */}
            {/* {stateData ? MainStack(Stack) : AuthStack(Stack)} */}

                {/* {stateData ? <Stack.Screen name="MainStack" component={MainStack} /> : AuthStack(Stack)} */}
            
                {/* {AuthStack(Stack)} */}
                {MainStack(Stack)}
            {/* </Stack.Navigator> */}
        </NavigationContainer>
    )
}
export default Routes;
