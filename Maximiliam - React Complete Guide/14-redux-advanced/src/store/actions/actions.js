export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUB = 'SUB';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

/* ACTION CREATORS: */
export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const add = (value) => {
    return {
        type: ADD,
        value: value
    };
};

export const sub = (value) => {
    return {
        type: SUB,
        value: value
    };
};

export const saveResult = (res) => {
    return {
        type: STORE_RESULT,
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
        type: DELETE_RESULT,
        resultId: res
    };
};