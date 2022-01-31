import React from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity
}
from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import FoodHomeTab from "../FoodApp/FoodHome"
import FoodDeliveryTab from "../FoodApp/OrderDelivery"
import COLORS from '../FoodApp/consts/theme'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
    <NavigationContainer>

<Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown:false,
            tabBarShowLabel:false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let imgName;

            if (route.name === 'Home') {
                imgName = require('../../assets/icons/cutlery.png');
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Search') {
                imgName = require('../../assets/icons/search.png');
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            else if (route.name === 'Like'){
                imgName = require('../../assets/icons/like.png')
            }
            else if (route.name === 'User'){
                imgName = require('../../assets/icons/user.png')
            }
            // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
            return <Image source={imgName} style={{ width:25, height:25, tintColor:focused ? COLORS.COLORS.primary: COLORS.COLORS.secondary} } />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={FoodHomeTab} />
        <Tab.Screen name="Search" component={FoodDeliveryTab} />
        <Tab.Screen name="Like" component={FoodDeliveryTab} />
        <Tab.Screen name="User" component={FoodDeliveryTab} />
      </Tab.Navigator>

      {/* <Tab.Navigator screenOptions={{headerShown: false }}>
        <Tab.Screen name="Home" component={FoodHomeTab} options={{ tabBarBadge: 3}} />
        <Tab.Screen name="Settings" component={FoodDeliveryTab} />
      </Tab.Navigator> */}
    </NavigationContainer>

//         <NavigationContainer>

//         <Tab.Navigator
//         screenOptions={{
//                 // showLabel:false
//             }}
//         >

// <Tab.Screen name="Home" component={FoodHome} />
//         <Tab.Screen name="Settings" component={OrderDelivery} />
//            {/* { console.log(icons) } */}
//             {/* <Tab.Screen 
//                 name="Home"
//                 component={FoodHomeTab}
//                 options={{
//                     tabBarIcon: ( {focused} ) => {
//                         <Image 
//                         // source={icons.cutlery}
//                         resizeMode="contain"
//                         style={{ width:25, height:25}}
//                         />
//                     }
//                 }}
//             /> */}
//         </Tab.Navigator>
//         </NavigationContainer>

    )
}
export default Tabs;