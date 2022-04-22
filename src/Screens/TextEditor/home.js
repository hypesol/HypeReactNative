import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  PanResponder,
  Animated,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";


//      navigation.navigate('SelectSticker');


const Home = () => {
    return(
        <View style={{flex:1, paddingTop:100}}>
        <TouchableOpacity 
        // onPress={()=> navigation.navigate('SelectSticker')}
        ><Text>Hello</Text></TouchableOpacity>
        </View>
    )
}

export default Home;