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
import ImageUpload from '../Screens/Upload/ImageUpload';
import ImageSelect from '../Screens/Upload/ImageSelect';
import ImagePicker from '../Screens/Upload/ImagePicker';
import ShareExample from '../Screens/Sharing/ShareSimple';
import ShareAdvance from '../Screens/Sharing/ShareLink';
import ShareMedia from '../Screens/Sharing/ShareMedia';
import ShareAll from '../Screens/Sharing/ShareAll';
import ProductDesign from '../Screens/ProductDesign'

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


        <Tab.Screen name="ProductDesign" component={ProductDesign} />
        <Tab.Screen name="ShareAll" component={ShareAll} />
        <Tab.Screen name="ShareMedia" component={ShareMedia} />
        <Tab.Screen name="ShareAdvance" component={ShareAdvance} />
        <Tab.Screen name="ShareExample" component={ShareExample} />
        <Tab.Screen name="ImagePicker" component={ImagePicker} />
        <Tab.Screen name="ImageSelect" component={ImageSelect} />
        {/* <Tab.Screen name="ImageUpload" component={ImageUpload} /> */}
        {/* <Tab.Screen name="GRAPHQL" component={GRAPHQL} /> */}
        {/* <Tab.Screen name="RESTAPI" component={RESTAPI} /> */}
        {/* <Tab.Screen name="JSON" component={JSON} /> */}
        {/* <Tab.Screen name="HomeStack" component={HomeStack} /> */}
      </Tab.Navigator>
    </>
  );
}
