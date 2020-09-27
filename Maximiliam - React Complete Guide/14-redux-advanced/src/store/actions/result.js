import * as actionTypes from './actionTypes';

/* ACTION CREATORS: */
export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
};

// use Redux Thunk to 'dispatch' a Sync action within a Async action:
export const storeResult = (res) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);

    }
};

export const deleteResult = (res) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: res
    };
};