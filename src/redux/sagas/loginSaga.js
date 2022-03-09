import { call } from "redux-saga/effects";

export default function* loginInfo(action){
    // export const loginInfo= (action) => {
    console.log(action);
    // const apiURL = "https://dev-accounts.seebiz.com/getAdOnStatus?adOnKey=seebiz";
    const apiURL = "https://dev-accounts.seebiz.com/login";
    getLoginInfo = async data =>{
        // console.log("Login Info: ",data.data);
        const dataObj= JSON.stringify({ "email": "test@gmail.com", "passsword":"123"});
        const formData = JSON.stringify(data.data);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formData,
                redirect: 'follow'
              };

         const userInfo = await fetch("https://dev-accounts.seebiz.com/login/", requestOptions)
            .then(response => response.text())
            .then(response => { 
                // console.log(response);
                // return response.json();
                return response;
            })
            .then(result => {
                return result;
            })
            .catch(error => {
                // console.log('error', error);
                return error;
            });
            
            return userInfo;
    }

    try{
        const userData = yield call(getLoginInfo, action);
        console.log("TEST:- ",userData);
    }
    catch(error){
        console.log("Error",error);
    }

}