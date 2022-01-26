import changeTheNumber from './counter';
// Call all reducers here.

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeTheNumber,
    //changeTheBackground,  you can combine multiple reducers here
});

export default rootReducer;