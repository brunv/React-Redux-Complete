import { put } from "redux-saga/effects";

import * as actionTypes from '../actions/actionTypes';

// the star turn this function into a "generator". Generators are nex gen JS features which are
// functions that can be executed incremmentally.
export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('userId');
    yield localStorage.removeItem('expirationDate');

    yield put({
        type: actionTypes.AUTH_LOGOUT
    });
}