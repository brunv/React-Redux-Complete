import React from 'react';
import './App.css';
import Person from './Person/Person.js';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi, this is a React App</h1>
//     </div>
//   );
// }

class App extends React.Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Stephen', age: 29 },
            { name: 'Andrew', age: 26 },
        ]
    }

    switchNameHandler = () => {
        // this.state.persons[0].name = 'Maximilian'; DONT DO THIS
        this.setState({
            persons: [
                { name: 'Maximilian', age: 28 },
                { name: 'Stephen', age: 29 },
                { name: 'Andrew', age: 27 },
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, this is a React App</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}>
                </Person>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}>
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}>
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
}

export default App;
