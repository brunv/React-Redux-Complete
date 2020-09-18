import React, { Component } from 'react';
import { connect } from "react-redux";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 8" clicked={this.props.onSubCounter} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strRes => (
                        <li key={strRes.id} onClick={() => this.props.onDeleteResult(strRes.id)}>{strRes.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// Here you store instructions about how the state managed by redux should be mapped to props:
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 10 }),
        onSubCounter: () => dispatch({ type: actionTypes.SUB, value: 8 }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultId: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);