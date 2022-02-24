// Here I am using PERSIST to move data to other screens
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux'; // Create store here

// These 2 lines for PERSIST
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/index'; // Call rootReducer which have all reducers

// PERSIST Configtations
const persistConfig = {
    key: 'root',
    storage: AsyncStorage, // we can use default storage like above or we can use AsyncStorage also
    // stateReconciler: hardSet,
    // blacklist :['',''] // Do not save specific reducer
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
   const store = createStore(persistedReducer);
   const persistor = persistStore(store);
   
   export { store, persistor}
  