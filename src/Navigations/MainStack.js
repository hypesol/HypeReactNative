import React from 'react';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PlantShop from '../Screens/PlantShop/PlantShop';
import PlantDetails from '../Screens/PlantShop/PlantDetail';
import JSON from '../Screens/WP/JSON';
import RESTAPI from '../Screens/WP/RESTAPI';
import GRAPHQL from '../Screens/WP/GRAPHQL';
import {GqlHomeScreen, GqlDetailScreen} from '../Screens/WP/GRAPHQL';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Profile" component={PlantShop} />
    <Stack.Screen name="PlantDetails" component={PlantDetails} />
    <Stack.Screen name="GqlHomeScreen" component={GqlHomeScreen} />
    <Stack.Screen name="GqlDetailScreen" component={GqlDetailScreen} />
  </Stack.Navigator>
);

export default function (Stack) {
  return (
    <>
      {/* <Stack.Screen name="Profile" component={PlantShop} />
        <Stack.Screen name="PlantDetails" component={PlantDetails} /> */}
      <Stack.Screen name="GqlDetailScreen" component={GqlDetailScreen} />
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="GRAPHQL" component={GRAPHQL} />
        <Tab.Screen name="RESTAPI" component={RESTAPI} />
        <Tab.Screen name="JSON" component={JSON} />
        <Tab.Screen name="HomeStack" component={HomeStack} />
      </Tab.Navigator>
    </>
  );
}
