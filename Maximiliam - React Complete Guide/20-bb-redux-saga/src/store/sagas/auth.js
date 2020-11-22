import { put, delay } from "redux-saga/effects";
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/index';

// the star turn this function into a "generator". Generators are nex gen JS features which are
// functions that can be executed incremmentally.
export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('userId');
    yield localStorage.removeItem('expirationDate');

    yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
}

export function* authUserSaga(action) {
    yield put(actions.authStart());

    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSSlJHIfv5qNFk39u5WwaWD82Q1DsppQU';
    if (!action.isSignup) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSSlJHIfv5qNFk39u5WwaWD82Q1DsppQU';
    }

    try {
        const response = yield axios.post(url, authData)

        const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.localId);

        yield put(actions.authSuccess(response.data.idToken, response.data.localId));
        yield put(actions.checkAuthTimeout(response.data.expiresIn));
    } catch (error) {
        yield put(actions.authFail(error.response.data));
    }
}