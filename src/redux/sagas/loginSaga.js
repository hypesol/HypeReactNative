import { call } from "redux-saga/effects";

export default function* loginInfo(action){
    // console.log(action);
    // const apiURL = "https://dev-accounts.seebiz.com/getAdOnStatus?adOnKey=seebiz";
    const apiURL = "https://dev-accounts.seebiz.com/login";
    getLoginInfo = async data =>{
        console.log(data.email);
        const response = await fetch(apiURL,
             {
               method: 'POST',
               headers: {
                // 'API-key': apikey,
                Accept: 'application/json',
                'Content-Type': 'application/json'
               },
               body: JSON.stringify(data) 
             }
            );
            console.log("Hi");
            console.log(response);
            //return response.json();
    }

    try{
        yield call(getLoginInfo, action)
    }
    catch(error){
        console.log("Error");
    }

}