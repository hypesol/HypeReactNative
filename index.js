/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/* LINE WHEN USE REDUX */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';

const store = configureStore();
//store.subscribe ( () => console.log(store.getState()) );

const RNRedux = () => {
    return(
    <Provider store={store}>
        <App />
    </Provider>
    )
}

/* LINE WHEN USE REDUX */

AppRegistry.registerComponent(appName, () => RNRedux);
// AppRegistry.registerComponent(appName, () => App);
