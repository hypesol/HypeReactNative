import React from 'react';
import { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Splash1 extends Component {
    render(){
        setTimeout(() =>{
            this.props.navigation.navigate('Home')
        }, 3000)
        return (
            <View>
                <Text style={{fontSize:42}}>Splash</Text>
            </View>
        )
    }
}

export default Splash1;