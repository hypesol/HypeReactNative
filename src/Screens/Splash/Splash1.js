import React from 'react';
import { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
// import { NavigationEvents } from '@react-navigation';

class Splash1 extends Component {
    render(){
        setTimeout(() =>{
            this.props.navigation.navigate('Home')
        }, 5000)
        return (
            <View>
                {/* <NavigationEvents 
                    onDidFocus={() => this.setState({})}
                /> */}
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