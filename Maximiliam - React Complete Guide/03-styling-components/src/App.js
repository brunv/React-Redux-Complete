import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: '0001', name: 'Max', age: 28 },
            { id: '0002', name: 'Manu', age: 29 },
            { id: '0003', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        })
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = { ...this.state.persons[personIndex] };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    deletePersonHandler = (personIndex) => {
        // Arrys and objects are reference types, so it's only holding a pointer:
        // const persons = this.state.persons;
        // persons.splice(personIndex, 1); // this changes the element persons was pointing to

        // BUT YOU SHOULD ALWAYS UPDATE STATE IN AN IMMUTABLE FASHION, SO WITHOUT
        // MUTATING THE ORIGINAL STATE FIRST

        // So the best practice is to keep it untouched by creating a copy of it:
        // const persons = this.state.persons.slice();
        // or:
        const persons = [...this.state.persons];
        // and then working it the copy:
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        const current = this.state.showPersons;
        this.setState({ showPersons: !current });
        // console.log(current);
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        // conditional rendering "the javascript way":
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                // click={deletePersonHandler.bind(this, index)} ALT VERSION
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                            />
                        )
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    // Passing the function reference:
                    onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
                {/* {this.state.showPersons === true ? */}
                {persons}
                {/* : null } */}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
