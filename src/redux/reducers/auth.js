const initialState = {
loggedIn: false,
usr: '',
pwd: '',
login: false,
userInfo:[]
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case "USER_LOGIN":{
            return {
              ...state,
              usr: action.username,
              pwd: action.data.pass,
              login: true,
              loggedIn: true
            };
        }

        case "USER_LOGIN_RESPONSE":{
          console.log(action.data)
          return {
            ...state,
            usr: action.data.user.username,
            userInfo: action.data,
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
