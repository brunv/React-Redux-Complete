import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const Joey = 'Joey';
const Martin = {
    firstName: 'Martin',
    lastName: 'Trout'
};

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                content="Nice blog post."
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author={Martin.firstName}
                timeAgo="Today at 3:00PM"
                content="Agreed!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author={Joey}
                timeAgo="Yesterday at 1:20PM"
                content="Wow! That's awesome."
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));