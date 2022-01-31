import React, { Component }  from 'react';
import  { View, Text, ScrollView } from 'react-native';
import Routes from './src/Navigation/Routes';
import RoutesLogin from './src/Navigations/Routes';
import TestScreen from './src/Screens/Navigation/tabs'
// import TestScreen from './src/Screens/Test/LifeCycle';
class App extends Component {
  render(){
    return (
      <View style={{flex: 1}}>
        <RoutesLogin />
        {/* <Routes /> */}
        {/* <TestScreen /> */}
        {/* <Text>HOME SCREEN</Text> */}
      </View>
    )
  }
}

export default App;
