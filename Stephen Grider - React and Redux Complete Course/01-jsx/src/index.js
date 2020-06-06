// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//     return 'Click on Me!';
// }

// Create a react component
const App = () => {
    // const buttonText = 'Click Me!';
    // const buttonText = ['Hi', 'There'];
    // const buttonText = [123, 45];
    // const buttonText = 1234567;
    const buttonText = { text: 'Clicky clicky' };   // can't use an object as text
    const style = {backgroundColor: 'orange', color: 'red'};

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={style}>{buttonText.text}</button>
        </div>);
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,        // This is the component we created
    document.querySelector('#root') // and this is the place we want to show it
);

/**
 * Original HTML:
    <div>
        <label class="label" for="name">Enter name:</label>
        <input id="name" type="text">
        <button style="background-color: orange; color: red;">Submit</button>
    </div>
 */