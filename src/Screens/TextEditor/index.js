import React from 'react';
import { View ,Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import CoverEditor from './CoverEditor';
import Home from './home';
import DragTextEditor from './DragTextEditor';
import DragTextEditorFull from './DragTextEditorFull';
import TextEditor from './TextEditorV1';

const Stack = createNativeStackNavigator();

function TextEditorMain(){
    return (
        <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Home" screenOptions={{header: () => null}}> */}
            <Stack.Navigator initialRouteName="TextEditor" screenOptions={{headerShown: false }}>
                <Stack.Screen name="Home" component={Home} /> 
                <Stack.Screen name="DragTextEditor" component={DragTextEditor} /> 
                <Stack.Screen name="DragTextEditorFull" component={DragTextEditorFull} /> 
                <Stack.Screen name="TextEditor" component={TextEditor} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default TextEditorMain;


const styles = StyleSheet.create({});
