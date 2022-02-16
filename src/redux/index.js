import React from 'react';
import {Component} from 'react';
import { View, Text, Button, TextInput} from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import { incNumber, decNumber } from './actions/index'

// const {myState} = useSelector((state) => state.changeTheNumber);
class ReduxHome extends Component {
    // const myState = { useSelector((state) => state.changeTheNumber) };
    render(){
        // const {myState} = useSelector((state) => state.changeTheNumber);
        // const myState = state => ({
            // useSelector((state) => state.changeTheNumber)
            // count: state.changeTheNumber,
        //   });
        return(
            <View style={{flex:1, alignItems:'center', marginTop:20}}>
                <View style={{flexDirection: 'row'}}>
                <Button title='+' />
                <TextInput value='1' />
                <Button title='-' />
                </View>
            </View>
        )
    }
}

export default ReduxHome;