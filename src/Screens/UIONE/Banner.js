import React from 'react';
import { Component } from 'react';
import {View, Text, StyleSheet, Image,  ImageBackground} from 'react-native';
import ImageOverlay from './ImageOverlay';

class Banner extends Component {
    render(){
        return(
            <ImageBackground source={require('../../assets/images/slider_home-pic1.jpg')}  style={styles.banner}>
                <ImageOverlay 
                header='-  React Native  -' 
                paragraph='- Paragraph -'    
                />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    banner:{

    }
})

export default Banner;
