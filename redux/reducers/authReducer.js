// Initial State
const initialState = {
  loggedIn: false,
  usr:'',
  pwd:'',
  login:false
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case 'LOGIN': {
      return {
        // State
        ...state,
        // Redux Store
        loggedIn: action.trueFalse,
      }
    }
    case "USER_LOGIN": 
    // console.log(action.data.email)
        // const setData = {
        //     user:'ejaz',
        //     password:'123'
        // }
        // rtVar = "Login"; 
        return {
            ...state,
            usr:action.data.email,
            pwd:'123',
            login:true,
            loggedIn:true
            };
    case "USER_LOGOUT":
      return{
        ...state,
        usr:'',
        login:false,
        loggedIn:false

      }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default authReducer;