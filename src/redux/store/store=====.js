import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from '../reducers/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['bookmarks']
};

const persistedReducer = combineReducers({
  rootReducer: persistReducer(persistConfig, rootReducer)
});

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);