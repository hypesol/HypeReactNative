import React from 'react';
import { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

class Splash1 extends Component {
    render(){
        setTimeout(() =>{
            this.props.navigation.navigate('Home')
        }, 5000)
        return (
            <View>
                <Text style={{fontSize:42}}>Splash</Text>
                <Button 
                    title="Skip Intro"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
            </View>
        )
    }
}

export default Splash1;