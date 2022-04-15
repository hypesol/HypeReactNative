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
import ImageUpload from '../Screens/Test/ImageUpload';
import ImageSelect from '../Screens/Test/ImageSelect';
import ImagePicker from '../Screens/Test/ImagePicker';

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
      <Stack.Screen name="ImageUpload" component={ImageUpload} />
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="ImagePicker" component={ImagePicker} />
        <Tab.Screen name="ImageSelect" component={ImageSelect} />
        <Tab.Screen name="ImageUpload" component={ImageUpload} />
        <Tab.Screen name="GRAPHQL" component={GRAPHQL} />
        <Tab.Screen name="RESTAPI" component={RESTAPI} />
        <Tab.Screen name="JSON" component={JSON} />
        <Tab.Screen name="HomeStack" component={HomeStack} />
      </Tab.Navigator>
    </>
  );
}
