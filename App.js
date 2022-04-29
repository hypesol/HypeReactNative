import React, { Component, useState, useEffect }  from 'react';
import  { View, ActivityIndicator } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//import configureStore from './src/redux/store/store';

//import Routes from './src/Navigation/Routes';

//import TestScreen from './src/Screens/Navigation/tabs'
//import TestScreen from './src/Screens/Login/Login';
// import TestScreen from './src/redux/index';
import ProductDesigner from './src/Screens/ProductDesign';
import JSON from './src/Screens/WP/JSON';
import AnimatedSplash from "react-native-animated-splash-screen";
import TextEditor from './src/Screens/TextEditor'
import DragDrop from './src/Screens/DragDrop'
import RoutesLogin from './src/Navigations/Routes';
import { store, persistor } from './src/redux/store/store';
import CanvasApp from './src/Screens/Canvas'

/// import { store, persistor } from './redux/store/store';

import Counter from './src/Screens/Test/Counter';

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // SplashScreen.hide();
      setTimeout(() => {
        setLoading(true);
      }, 500);
    }, 3000);
  }, []);
    return (
      <AnimatedSplash
        translucent={true}
        isLoaded={loading}
        logoImage={require("./src/assets/splash-logo.png")}
        backgroundColor={"#ffffff"}
        logoHeight={150}
        logoWidth={150}
      >
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator/>} persistor={persistor} >
          <View style={{flex: 1}}>
            {/* <CanvasApp /> */}
            {/* <DragDrop /> */}
            {/* <Counter /> */}
            {/* <ProductDesigner /> */}
            <TextEditor/>
              {/* <Routes /> */}
              {/* <JSON /> */}
              {/* <Text>HOME SCREEN</Text> */}
          </View>
        </PersistGate>
      </Provider>
      </AnimatedSplash>
    )
}

export default App;
