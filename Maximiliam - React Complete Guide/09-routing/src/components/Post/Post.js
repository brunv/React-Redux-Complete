import React from 'react';
// import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => {
    // console.log(props);
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
};

// 'withRouter' is a nice way of making this component route aware
// and it will get the props containing the information for the
// nearest loaded route:
// export default withRouter(post);
export default post;