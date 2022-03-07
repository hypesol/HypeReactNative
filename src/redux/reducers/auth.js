const initialState = {
loggedIn: false,
usr: '',
pwd: '',
login: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case "USER_LOGIN":{
            return {
              ...state,
              usr: action.data.email,
              pwd: action.data.pass,
              login: true,
              loggedIn: true
            };
        }
        case "USER_LOGOUT":{
          return {
            ...state,
            usr: '',
            login: false,
            loggedIn: false
          }
          }
        default: {
            return state
        }
    }
}

export default authReducer;
