import { combineReducers } from 'redux';

import changeTheNumber from './counter';
import userAuthentication from './auth';
// Call all reducers here.

const rootReducer = combineReducers({
    changeTheNumber,
    // userAuthentication,
    // user:userAuthentication
    //changeTheBackground,  you can combine multiple reducers here
});

export default rootReducer;