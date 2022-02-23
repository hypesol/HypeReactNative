// Here I am using PERSIST to move data to other screens

import {createStore} from 'redux'; // Create store here

// These 2 lines for PERSIST
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers/index'; // Call rootReducer which have all reducers

// PERSIST Configtations
const persistConfig = {
    key: 'root',
    storage,
    // storage: AysncStorage // we can use default storage like above or we can use AsyncStorage also
    blacklist :['',''] // here mentioned screen will not PERSIST 
  }

  const reducers = persistReducer(persistConfig, rootReducer);
  // const reducers = rootReducer;

  // const configureStore = () =>{
  //     let store = createStore(reducers)
  //     let persistor = persistStore(store);
  //     return { store, persistor }
  // }
  // export default configureStore;

  export default () =>{
    let store = createStore(reducers)
    let persistor = persistStore(store);
    return { store, persistor }
  }
  // export default configureStore;
