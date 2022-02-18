// when you will have to return single line
//export const incNumber = () => { type: 'INCREMENT' }
// OR

export const userLogin = (data) => {
    return {
        type: 'USER_LOGIN',
        data
    }
}

export const userLogout = () => {
    return {
        type: 'USER_LOGOUT'
    }
}
