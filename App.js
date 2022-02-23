import React, { Component }  from 'react';
import  { View, ActivityIndicator } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/redux/store/store';

import Routes from './src/Navigation/Routes';
import RoutesLogin from './src/Navigations/Routes';
//import TestScreen from './src/Screens/Navigation/tabs'
import TestScreen from './src/Screens/Login/Login';
// import TestScreen from './src/redux/index';

const sstore = configureStore();
const persistor = configureStore();
// import { persistor, store } from './src/redux/store/store';
// const store = configureStore();
const App = () => {

    return (
      <Provider store={sstore}>
        <PersistGate loading={<ActivityIndicator/>} persistor={persistor} >
          <View style={{flex: 1}}>
            <RoutesLogin />
              {/* <Routes /> */}
              {/* <TestScreen /> */}
              {/* <Text>HOME SCREEN</Text> */}
          </View>
        </PersistGate>
      </Provider>
    )
}

export default App;
