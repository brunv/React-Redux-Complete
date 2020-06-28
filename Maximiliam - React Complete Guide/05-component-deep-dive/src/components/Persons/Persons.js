import React from 'react';
import Person from '../Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


const persons = (props) => props.persons.map((person, index) => {
    return (
        // In 'map' the 'key' has to be on the outer element:
        <ErrorBoundary key={person.id}>
            <Person
                click={() => props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(e) => props.changed(e, person.id)} />
        </ErrorBoundary>
    );
});

export default persons;