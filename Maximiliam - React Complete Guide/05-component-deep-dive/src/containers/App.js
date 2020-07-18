import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
        // this.state = { }
    }

    /* This is just a more modern syntax wich behind the scenes will 
       basically add the constructor for you, call super(props) and
       set the state up in the constructor. */
    state = {
        persons: [
            { id: '0001', name: 'Max', age: 28 },
            { id: '0002', name: 'Manu', age: 29 },
            { id: '0003', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
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
        // Arrays and objects are reference types, so it's only holding a pointer:
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
        console.log('[App.js] render');
        // conditional rendering "the javascript way":
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />
            );
        }

        return (
            <div className="App">
                <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
                {this.state.showCockpit ? (
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}
                    />
                ) : null}
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
