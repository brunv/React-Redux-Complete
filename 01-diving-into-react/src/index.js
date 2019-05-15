// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    return <div>Hey there!</div>;
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,        // This is the component we created
    document.querySelector('#root') // and this is the place we want to show it
);