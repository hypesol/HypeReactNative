import React from 'react';
import { Component } from 'react';
import { View, Text} from 'react-native';

class LifeCycle extends Component{

    constructor(props){
        super();
        this.state = {refreshonbacktesting:0};
        console.log("1. Constructor");
    }


    UNSAFE_componentWilMount() {
        console.log('componentWilMount called.');
      }

    render(){
        console.log("Render");
        return(
            <View><Text>LifeCycle</Text></View>
        )
    }


    componentDidMount() {
        console.log('componentDidMount called.');
        this.setState({refreshonbacktesting:0});
      }

     shouldComponentUpdate(props, state) {
        console.log('component Should Update called.');
        return true;
      }

      componentDidUpdate() {
        console.log('component Did Update called.');
      }

      componentWillUnmount(){
        console.log('component Will Unmount called.');

      }

}

export default LifeCycle;