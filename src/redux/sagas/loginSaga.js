import { call, put } from "redux-saga/effects";
import * as userActions from "../actions/auth"

export default function* loginInfo(action){
    // export const loginInfo= (action) => {
    console.log(action);
    const apiURL = "https://dev-accounts.seebiz.com/login";
    getLoginInfo = async data =>{
        // console.log("Login Info: ",data.data);
        const dataObj= JSON.stringify({"email": "testhajaj@gmail.com", "password": "Changeme1@3"});
        const formData = JSON.stringify(data.data);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: dataObj,
            redirect: 'follow'
            };

         const userInfo = await fetch("https://dev-accounts.seebiz.com/login/", requestOptions)
            .then(response => response.text())
            .then(response => { 
                // console.log(response);
                // return response.json();
                // console.log(JSON.parse(response).code);
                return (JSON.parse(response));
            })
            // .then(result => {
            //     return result;
            // })
            .catch(error => {
                // console.log('error', error);
                return error;
            });
            return userInfo;
    }

    try{
        let userData = yield call(getLoginInfo, action);
        // console.log("TEST:- ",userData);
        yield put(userActions.userLoginResponse(userData));
    }
    catch(error){
        console.log("Error",error);
    }
}