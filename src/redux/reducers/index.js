import { combineReducers } from 'redux';

// import changeTheNumber from './counter';
import userAuthentication from './auth';
// Call all reducers here.

const rootReducer = combineReducers({
    // chNum:changeTheNumber,
    authReducer:userAuthentication
});

export default rootReducer;