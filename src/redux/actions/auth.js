// when you will have to return single line
//export const incNumber = () => { type: 'INCREMENT' }
// OR

export const userLogin = (data) => {
    return {
        type: 'USER_LOGIN_SAGA',
        data
    }
}

export const userLoginResponse = (data) =>{
    return{
        type: 'USER_LOGIN_RESPONSE',
        data
    }
}

export const userLogout = () => {
    return {
        type: 'USER_LOGOUT'
    }
}

export const haveInfo = ({numberInfo}) => {
    return{
        type: 'NUMBER_INFO_ASYNC',
        numberInfo
    }
}