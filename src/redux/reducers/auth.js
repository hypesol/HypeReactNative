const initialState = {
    usr:'',
    pwd:'',
    login:false
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
                pwd:'123',
                login:true
                };

        case "DECREMENT":
            rtVar = "Logout"; 
            return rtVar;

        default: 
            return {...state};
    }
}

export default userAuthentication;
