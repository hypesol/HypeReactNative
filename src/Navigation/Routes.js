import React from 'react';
import { View ,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Profile, Splash1, PlantShop, PlantDetail } from '../Screens';
import {FoodHome, Restaurant, OrderDelivery} from '../Screens/FoodApp';
// import Tabs from '../Screens/Navigation/tabs';


const Stack = createNativeStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Home" screenOptions={{header: () => null}}> */}
            <Stack.Navigator initialRouteName="PlantShop" screenOptions={{headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Splash1" component={Splash1} />
                <Stack.Screen name="PlantShop" component={PlantShop} />
                <Stack.Screen name="PlantDetail" component={PlantDetail} />
                <Stack.Screen name="FoodHome" component={FoodHome} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
                <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
                {/* <Stack.Screen name="Tabs" component={Tabs} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;
