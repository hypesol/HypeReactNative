import React from 'react';
import { View ,Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import CoverEditor from './CoverEditor';
import CoverEditor from './CoverEditor';
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
            <Stack.Navigator initialRouteName="CoverEditor" screenOptions={{headerShown: false }}>
                <Stack.Screen name="CoverEditor" component={CoverEditor} />
                {/* <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Splash1" component={Splash1} />
                <Stack.Screen name="PlantShop" component={PlantShop} />
                <Stack.Screen name="PlantDetail" component={PlantDetail} />
                <Stack.Screen name="FoodHome" component={FoodHome} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
                <Stack.Screen name="OrderDelivery" component={OrderDelivery} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default ProductDesigner;


const styles = StyleSheet.create({});
