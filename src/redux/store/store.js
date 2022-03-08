// REDUX WITH PERSIST AND SAGA
import {createStore, applyMiddleware} from 'redux'; // Create store here

// These 2 lines for PERSIST
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers/index'; // Call rootReducer which have all reducers

import createSagaMiddleware from '@redux-saga/core';

// import sagass from './sagas';

// PERSIST Configtations
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage, // we can use default storage like above or we can use AsyncStorage also
    // stateReconciler: hardSet,
    // blacklist :['',''] // Do not save specific reducer
  }

  const middleWare = [];
  const sagaMiddleWare = createSagaMiddleware();

  middleWare.push(sagaMiddleWare);

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
   const store = createStore(persistedReducer, applyMiddleware(sagaMiddleWare));
   let persistor = persistStore(store);
   
   export { store, persistor}
  