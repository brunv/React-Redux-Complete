import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withStyledComponent from '../../../hoc/withStyledComponent';
import AuthContext from '../../../context/auth-context';

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
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    // Static property means that it can be accessed from outside without the
    // need to instatiate an object based on this class first
    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            // <div className="Person">
            <React.Fragment>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log In</p>}
                <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p> {this.props.children}</p>
                <input
                    // ref={(inputEl) => { this.inputElement = inputEl }} 
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </React.Fragment>
            // </div >
        )

    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withStyledComponent(Person, StyledDiv);