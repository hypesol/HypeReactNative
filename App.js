import React, { Component }  from 'react';
import  { View, Text, ScrollView } from 'react-native';
import Routes from './src/Navigation/Routes';
import TestScreen from './src/Screens/Navigation/tabs'
// import TestScreen from './src/Screens/Test/LifeCycle';
class App extends Component {
  render(){
    return (
      <View style={{flex: 1}}>
        {/* <Routes /> */}
        <TestScreen />
        {/* <Text>HOME SCREEN</Text> */}
      </View>
    )
  }
}

export default App;
