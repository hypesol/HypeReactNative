import React, { Component }  from 'react';
import  { View, Text, ScrollView } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PresistGate } from 'redux-presist/es/integration/eract'
// import configureStore from './redux/configureStore';
import configureStore from './src/redux/store/store';


import Routes from './src/Navigation/Routes';
import RoutesLogin from './src/Navigations/Routes';
//import TestScreen from './src/Screens/Navigation/tabs'
// import TestScreen from './src/Screens/Login/Login';
import TestScreen from './src/redux/index';

const store = configureStore();

const App = () => {
    return (
      <Provider store={store}>
      <View style={{flex: 1}}>
        {/* <RoutesLogin /> */}
        {/* <Routes /> */}
        <TestScreen />
        {/* <Text>HOME SCREEN</Text> */}
      </View>
      </Provider>
    )
}

export default App;
