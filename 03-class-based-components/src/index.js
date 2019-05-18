import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // constructor(props) {
    //     super(props);   // Super is a reference to the parent's constructor function

    //     // THIS IS THE ONLY TIME we do direct assignment to this.state !
    //     this.state = { lat: null, errorMessage: '' };
    // }

    // This is equivalent to defining the constructor function and initializing
    // our state inside there
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        // Get users current position
        // Call setState(): this will run asynchronously
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message})
        );
    }

    // If we ever have to have conditional logic as you se right above
    // we're always going to instead put it to a helper method:
    renderContent() {
        // Conditional rendering:
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay latitude={this.state.lat}/>;
            // Yes, we can pass 'state' as a 'props' down to the child
        }
        return <Spinner message="Getting the current position..."/>;
    }

    render () {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);