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

  const persistReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () =>{
    // return createStore(rootReducer);
    let store = createStore(persistReducer)
    let persistor = persistStore(store);
    return { store, persistor}
}
//const store = createStore(rootReducer); // Now all data will be store in "store" variable

export default configureStore; // and can be access all over the application.
