import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
    // dummy: () => 'dummy reducer'
    posts: postsReducer
});