import jsonPlaceholder from '../apis/jsonPlaceholder';

// export const fetchPosts = () => {
//     // Bad approach!!
//     // const response = await jsonPlaceholder.get('/posts');

//     // Using Redux Thunk:
//     return async function (dispatch, getState) {
//         const response = await jsonPlaceholder.get('/posts');

//         dispatch({ type: 'FETCH_POSTS', payload: response });
//         // return {
//         //     type: 'FETCH_POSTS',
//         //     payload: response
//         // };
//     };

// };

export const fetchPosts = () => async (dispatch) => {
    // this is a function that returns a function
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};