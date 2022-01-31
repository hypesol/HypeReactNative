import Validator from "is_js";

const checkEmpty = (val, key) => {
    if(Validator.empty(val.trim())){
        return `${key}`
    }
    else {
        return '';
    }
}

const checkMinLength = (val, minLength, key) => {
    if(val.trim().length < minLength){
        return `Please enter valid ${key}`
    }
    else{
        return '';
    }
}



export default function (data){
    const { userName, email, password} = data

    if (userName != undefined){
        //let emptyValidation
    }
}