import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // 'concat()' returns a new array which is the older array plus the argument:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result * 2 }) });

        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results]; // copied the results in state
            // newArray.splice(id, 1);              // removed the item by id (position)

            const updatedArray = state.results.filter(result => result.id !== action.resultId);
            return updateObject(state, { results: updatedArray });

        default:
            return state;
    }
};

export default reducer;