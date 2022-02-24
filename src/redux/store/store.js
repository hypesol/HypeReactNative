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
  
  export const store = createStore(persistedReducer);
  export const persistor = persistStore(store);

  
  // const configureStore = () =>{
  //     let store = createStore(reducers)
  //     let persistor = persistStore(store);
  //     return { store, persistor }
  // }
  // export default configureStore;




//   export default () =>{
//     let store = createStore(persistedReducer)
//     // let store = createStore(persistedReducer, applyMiddleware(thunk))
//     let persistor = persistStore(store);
//     return { store, persistor }
//   }
  // export default configureStore;
