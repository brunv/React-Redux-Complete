import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    // dummy: () => 'dummy reducer'
    posts: postsReducer,
    users: usersReducer
});