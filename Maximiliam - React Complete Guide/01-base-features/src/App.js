import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi, this is a React App</h1>
//     </div>
//   );
// }

const App = (props) => {
    const [person, setPerson] = useState({
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Stephen', age: 29 },
            { name: 'Andrew', age: 26 },
        ],
        otherState: 'some other value'
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(person, otherState);

    const switchNameHandler = (newName) => {
        // this.state.persons[0].name = 'Maximilian'; DONT DO THIS
        setPerson({
            persons: [
                { name: newName, age: 28 },
                { name: 'Stephen', age: 29 },
                { name: 'Andrew', age: 27 },
            ],
            otherState: person.otherState
        });
    }

    const nameChangedHandler = (event) => {
        setPerson({
            persons: [
                { name: 'Maximilian', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Andrew', age: 27 },
            ]
        })
    }

    const style = {
        backgorundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
        <div className="App">
            <h1>Hi, this is a React App</h1>
            <button
                style={style}
                onClick={switchNameHandler}>
                Switch Name
            </button>
            <Person
                name={person.persons[0].name}
                age={person.persons[0].age}>
            </Person>
            <Person
                name={person.persons[1].name}
                age={person.persons[1].age}
                click={switchNameHandler.bind(this, 'Max!')}
                changed={nameChangedHandler}>
            </Person>
            <Person
                name={person.persons[2].name}
                age={person.persons[2].age}>
            </Person>
        </div>
    );

    // This JSX above is compiled to this code:

    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'Hi, this is a React App')
    // );
}

export default App;
