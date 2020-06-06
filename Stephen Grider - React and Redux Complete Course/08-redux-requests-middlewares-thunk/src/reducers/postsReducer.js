export default (state = [], action) => {

    // common syntax is to use switch instead of if statement
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};