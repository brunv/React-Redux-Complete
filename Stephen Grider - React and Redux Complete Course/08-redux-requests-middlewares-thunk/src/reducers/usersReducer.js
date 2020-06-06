export default (state = [], action) => {

    switch (action.type) {
        case 'FETCH_USER':
            // add all the users fetched through 'response.data' to the state
            return [...state, action.payload];
        default:
            return state;
    }
};