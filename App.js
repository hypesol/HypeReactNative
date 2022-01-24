import React, { Component }  from 'react';
import  { View, Text, ScrollView } from 'react-native';
import Routes from './src/Navigation/Routes';
import TestScreen from './src/Screens/UIONE'
// import Home from './src/Screens/Profile/Profile';
class App extends Component {
  render(){
    return (
      <View style={{flex: 1}}>
        <TestScreen />
      </View>
    )
  }
}

export default App;
