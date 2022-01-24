import React from 'react';
import { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomImage from './CustomImage';

class Content extends Component {
    render(){
        return(
            <View style={styles.content}>
                <View style={styles.col2}>
                    <CustomImage imageSource={require('../../assets/images/legal-help-clients.jpg')} />
                </View>

                <View style={styles.col1}>
                <CustomImage imageSource={require('../../assets/images/img4.jpg')} />
                </View>

                <View style={styles.banner}> 
                <CustomImage imageSource={require('../../assets/images/img4.jpg')} />
                </View>

                <View style={styles.col1}>
                <CustomImage imageSource={require('../../assets/images/img4.jpg')} />
                </View>
            </View>
            )
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1, 
        flexDirection: 'row',
        flexWrap:'wrap',
        width:'100%',
    },
    
    col1:{ flex:1, padding:5 },
    col2:{ flex:2, padding:5 },
    banner:{ width:'100%', alignItems:'center', justifyContent:'center', padding:5},
})

export default Content;
