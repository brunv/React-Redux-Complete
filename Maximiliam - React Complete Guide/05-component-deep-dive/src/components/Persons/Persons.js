import React from 'react';
import Person from '../Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


class Persons extends React.Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                // In 'map' the 'key' has to be on the outer element:
                <ErrorBoundary key={person.id}>
                    <Person
                        click={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(e) => this.props.changed(e, person.id)} />
                </ErrorBoundary>
            );
        }
        );

    }
};

export default Persons;