import React from 'react';
import Login from '../Screens/Login/Login';
import Signup from '../Screens/Signup/Signup';
import {fbLoginScreen, fbRegisterScreen} from '../Screens/FireBase/index'

export default function (Stack){
    return(
        <>
        {/* <Stack.Screen name="fbRegisterScreen" component={fbRegisterScreen} /> */}
        {/* <Stack.Screen name="fbLoginScreen" component={fbLoginScreen} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        </>
    )
}