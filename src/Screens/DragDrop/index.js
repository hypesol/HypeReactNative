import React from 'react';
import { View ,Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import CoverEditor from './CoverEditor';
import Example1 from './example1';
import Example2 from './example2';
import Example3 from './example3';


const Stack = createNativeStackNavigator();

function DragDropMain(){
    return (
        <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Home" screenOptions={{header: () => null}}> */}
            <Stack.Navigator initialRouteName="Example3" screenOptions={{headerShown: false }}>
                <Stack.Screen name="Example1" component={Example1} /> 
                <Stack.Screen name="Example2" component={Example2} /> 
                <Stack.Screen name="Example3" component={Example3} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default DragDropMain;


const styles = StyleSheet.create({});
