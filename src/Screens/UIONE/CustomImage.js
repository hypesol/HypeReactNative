import React from 'react';
import { Component } from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import ImageOverlay from './ImageOverlay';
class CustomImage extends Component {
    render(){
        return(
            <ImageBackground source={this.props.imageSource} style={styles.image}>
                <ImageOverlay header={this.props.header} paragraph={this.props.paragraph} />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height: 200,
        alignItems:'center',
        justifyContent: 'center',
    }
})

export default CustomImage;
