import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const Joey = 'Joey';
const Martin = {
    firstName: 'Martin',
    lastName: 'Trout'
};

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post."
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={Martin.firstName}
                    timeAgo="Today at 3:00PM"
                    content="Agreed!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={Joey}
                    timeAgo="Yesterday at 1:20PM"
                    content="Wow! That's awesome."
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));