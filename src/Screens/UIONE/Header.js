import React from 'react';
import { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
class Header extends Component {
    render(){
        return(
            <View style={styles.header}>
            <Image source={require('../../assets/images/sun.png')} style={styles.logoimg} />
                <Text style={styles.logotxt}>Header</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: { height:80, marginTop:20, backgroundColor:'#fff', alignItems: 'center', justifyContent: 'center', padding:20, flexDirection:'row', borderBottomWidth:4, borderBottomColor: '#ccc'},
    logoimg: { height:40, width:40 },
    logotxt: { fontSize:20, marginLeft:10, color:'#000' } 
})

export default Header;
