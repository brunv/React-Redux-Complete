import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);   // Super is a reference to the parent's constructor function

        // ! THIS IS THE ONLY TIME we do direct assignment to this.state !
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {                         // success callback
                // Call setState():
                this.setState({ lat: position.coords.latitude });

                // ! Don't do this:
                // this.state.lat = positions.coords.latitude
            },
            (err) => console.log(err)               // failure callback
        );
    }

    // React says we have to define render!
    render () {
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);