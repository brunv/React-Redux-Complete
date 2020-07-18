import React, { useEffect } from 'react';
import styled from 'styled-components';

const Cockpit = (props) => {

    // The '&' symbol means that this pseudo-class belongs to the this class (scoped)
    const StyledButton = styled.button`
        background-color: ${props => props.alt ? 'red' : 'green'};
        color: white;
        font: inherit;
        border: 1px solid blue;
        padding: 8px;
        cursor: pointer;

        &:hover {
            background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
            color: black;
        }
    `;

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        const timer = setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        // This will run when useEffect runs for the last time (due to the second argument []):
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);
    // If the second argument is an empty array, it will only render once

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        // In the opposite, this will run in every update cycle:
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    })

    const classes = [];
    if (props.personsLength <= 2) {
        classes.push('red');
    }
    if (props.personsLength <= 1) {
        classes.push('bold');
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <StyledButton alt={props.showPersons}
                // Passing the function reference:
                onClick={props.clicked}>
                Toggle Persons
            </StyledButton>
        </div>
    );
};

export default React.memo(Cockpit);
// It`s a good ideia to wrap a functional component that might not
// need to update with every change in the parent component with React.memo()