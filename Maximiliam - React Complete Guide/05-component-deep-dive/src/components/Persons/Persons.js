import React from 'react';
import Person from '../Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


class Persons extends React.PureComponent {
    // A PureComponent is just a normal component what already implements
    // shouldComponentUpdate with a complete props check, so that checks
    // for any changes in any prop of that component.

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    // Now if have such a scenario where you check all the props of a given
    // component for changes, then you can also not use shouldComponentUpdate
    // but instead extend a different type of component, a PureComponent

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
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