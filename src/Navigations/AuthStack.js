import React from 'react';
import Login from '../Screens/Login/Login';
import Signup from '../Screens/Signup/Signup';
import Profile from '../Screens/Profile/Profile';

export default function (Stack){
    return(
        <>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        </>
    )
}