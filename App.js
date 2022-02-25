import React, { Component }  from 'react';
import  { View, ActivityIndicator } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//import configureStore from './src/redux/store/store';

//import Routes from './src/Navigation/Routes';

//import TestScreen from './src/Screens/Navigation/tabs'
//import TestScreen from './src/Screens/Login/Login';
// import TestScreen from './src/redux/index';
import RoutesLogin from './src/Navigations/Routes';
import { store, persistor } from './src/redux/store/store';

// import { store, persistor } from './redux/store/store';

import Counter from './src/Screens/Test/Counter';

const App = () => {

    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator/>} persistor={persistor} >
          <View style={{flex: 1}}>
            {/* <Counter /> */}
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
