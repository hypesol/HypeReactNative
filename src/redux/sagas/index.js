import {all, takeLatest } from 'redux-saga/effects'

import loginSaga from './loginSaga';


export default function* watch(){
    yield all([
        takeLatest('USER_LOGIN_SAGA', loginSaga),
    ]);
}