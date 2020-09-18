const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }

        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }

        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }

        case 'SUB':
            return {
                ...state,
                counter: state.counter - action.value
            }

        case 'STORE_RESULT':
            // 'concat()' returns a new array which is the older array plus the argument:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }

        case 'DELETE_RESULT':
            // const id = 2;
            // const newArray = [...state.results]; // copied the results in state
            // newArray.splice(id, 1);              // removed the item by id (position)

            const updatedArray = state.results.filter(result => result.id !== action.resultId);

            return {
                ...state,
                results: updatedArray
            }

        default:
            return state;
    }
};

export default reducer;