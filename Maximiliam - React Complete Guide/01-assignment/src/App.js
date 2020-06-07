import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

function App() {
    const [state, setState] = useState({
        username: 'Maximilian'
    });

    const usernameChangedHandler = (e) => {
        setState({
            username: e.target.value
        });
    };

    return (
        <div className="App">
            <UserInput changed={usernameChangedHandler} currentName={state.username} />
            <UserOutput username={state.username} />
        </div>
    );
}

export default App;
