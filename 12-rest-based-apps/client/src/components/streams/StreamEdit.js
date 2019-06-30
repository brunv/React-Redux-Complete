import React from 'react';

const StreamEdit = (props) => {
    // We only have access to these props specifically because the streamEdit
    // component inside of our App.js file is being rendered by a <Route>
    // component, so react-router-dom is going to add in a bunch of different
    // props to streamEdit when it gets rendered onto the screen.
    // console.log(props);

    return <div>StreamEdit</div>;
};

export default StreamEdit;