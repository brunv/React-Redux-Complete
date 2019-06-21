import _ from 'lodash';
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

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // manually dispatch the action creator:
    await dispatch(fetchPosts());

    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));
    // same thing but using Lodash:

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value(); // executes all the steps above
};

export const fetchPosts = () => async (dispatch) => {
    // this is a function that returns a function
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {

    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};


/* Using MEMOIZATION with Lodash */
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });