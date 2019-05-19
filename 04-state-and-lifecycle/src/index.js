import React from 'react';
import ReactDOM from 'react-dom';

/*
const Clock = (props) => {
    return (
        <div>
                <h1>Hello, world!</h1>
                <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}
    
const tick = () => {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);
*/

/**
 * The fact that the Clock sets up a timer and updates the UI every second
 * should be an implementation detail of the Clock. To implement this, we need
 * to add 'state' to the Clock component.
 */

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

/**
 * Clock is now defined as a class rather than a function. The 'render'
 * method will be called each time an update happens.
 * 
 * We want to set up a timer whenever the Clock is rendered to the DOM for the
 * first time. This is called 'mounting' in React.
 * We also want to clear that timer whenever the DOM produced by the Clock is
 * removed. This is called 'unmounting' in React.
 * 
 * We can declare special method on the component class to run some code when a
 * component mounts and unmounts. These methods are called LIFECYCLE METHODS.
 * 
 * The componentDidMount() method runs after the component output has been
 * rendered to the DOM. This is a good place to set up a timer. And we will
 * tear down the timer in the componentWillUnmount() lifecycle method.
 */