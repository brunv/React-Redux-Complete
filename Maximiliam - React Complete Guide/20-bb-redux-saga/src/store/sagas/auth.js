import { put, delay } from "redux-saga/effects";

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