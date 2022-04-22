import React from 'react';
import { View ,Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import CoverEditor from './CoverEditor';
import Home from './home';
import DragTextEditor from './DragTextEditor';
import DragTextEditorFull from './DragTextEditorFull';
// import PhoneCover from './PhoneCover';
// import SelectModel from './SelectModel';
// import CustomedCategory from './CustomedCategory';
// import BGColorPicker from './BGColorPicker';
// import FontColorPicker from './FontColorPicker';
// import AddText from './AddText';
// import SelectSticker from './SelectSticker';
// import StickerItems from './StickerItems';
// import PhoneCase from './PhoneCase';
// import AddBGImage from './AddBGImage';
// import CartScreen from './src/cart/CartScreen';
// import CheckOut from './src/cart/CheckOut';

const Stack = createNativeStackNavigator();

function ProductDesigner(){
    return (
        <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Home" screenOptions={{header: () => null}}> */}
            <Stack.Navigator initialRouteName="DragTextEditorFull" screenOptions={{headerShown: false }}>
                <Stack.Screen name="Home" component={Home} /> 
                <Stack.Screen name="DragTextEditor" component={DragTextEditor} /> 
                <Stack.Screen name="DragTextEditorFull" component={DragTextEditorFull} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default ProductDesigner;


const styles = StyleSheet.create({});
