const initialState = {
    usr:'',
    pwd:''
};
const userAuthentication = (state = initialState, action ) => {
    // actions parameter have all data here

    let rtVar;
    switch(action.type){
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
                pwd:'123'
                };

        case "DECREMENT":
            rtVar = "Logout"; 
            return rtVar;

        default: 
            return {...state};
    }
}

export default userAuthentication;
