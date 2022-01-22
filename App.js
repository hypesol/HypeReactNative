import React, { Component }  from 'react';
import  { View, Text, ScrollView } from 'react-native';
import Routes from './src/Navigation/Routes';
import {StatusBar} from 'react-native';
// import Home from './src/Screens/Profile/Profile';
class App extends Component {
  render(){
    return (
      <View style={{flex: 1}}>
      <StatusBar />
        <Routes />
      </View>
    )
  }
}

export default App;
