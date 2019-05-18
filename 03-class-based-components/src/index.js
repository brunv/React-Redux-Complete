import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);   // Super is a reference to the parent's constructor function

        // THIS IS THE ONLY TIME we do direct assignment to this.state !
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {                         // success callback
                // Call setState(): this will run asynchronously
                this.setState({ lat: position.coords.latitude });

                // Don't do this:
                // this.state.lat = positions.coords.latitude
            },
            (err) => {                              // failure callback
                this.setState({ errorMessage: err.message})
            }
        );
    }

    componentDidMount() {
        console.log('My component was rendered to the screen');
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!');
    }

    // React says we have to define render!
    render () {
        // Conditional rendering:
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }
        return <div>Loading!</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);