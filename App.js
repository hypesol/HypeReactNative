import React, { Component }  from 'react';
import  { View, Text, ScrollView } from 'react-native';
import Routes from './src/Navigation/Routes';
// import TestScreen from './src/redux'
import TestScreen from './src/Screens/Test/LifeCycle';
class App extends Component {
  render(){
    return (
      <View style={{flex: 1}}>
        {/* <Text>This is Home Screen</Text> */}
        {/* <Routes /> */}
        <TestScreen />
      </View>
    )
  }
}

export default App;
