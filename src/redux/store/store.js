// Here I am using PERSIST to move data to other screens
import {createStore, applyMiddleware} from 'redux'; // Create store here

// These 2 lines for PERSIST
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from 'redux-persist/lib/storage';

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
   let persistor = persistStore(store);
   
   export { store, persistor}
  