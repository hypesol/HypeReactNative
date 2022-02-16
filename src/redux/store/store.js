import {createStore} from 'redux'; // Create store here
import rootReducer from '../reducers/index'; // Call rootReducer which have all reducers

const store = () =>{
    return createStore(rootReducer);
}
//const store = createStore(rootReducer); // Now all data will be store in "store" variable

export default store; // and can be access all over the application.
