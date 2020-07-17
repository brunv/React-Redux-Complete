import React from 'react';
import styled from 'styled-components';

// import './Person.css';

// Every method provided by this styled object returns a React Component:
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

class Person extends React.Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            // <div className="Person">
            <StyledDiv>
                <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p> {this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </StyledDiv>
            // </div >
        )

    }
};

export default Person;