import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const Joey = 'Joey';
const Martin = {
    firstName: 'Martin',
    lastName: 'Trout'
};

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM"/>
            <CommentDetail author={Martin.firstName} timeAgo="Today at 3:00PM"/>
            <CommentDetail author={Joey} timeAgo="Yesterday at 1:20PM"/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));