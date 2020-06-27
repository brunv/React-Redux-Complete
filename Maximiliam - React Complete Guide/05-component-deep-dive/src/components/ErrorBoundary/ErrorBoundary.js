import React, { Component } from 'react';

// This is a Higher Order Component
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    // If we get an error thrown by something we wrap inside error boundary,
    // this method will fire:
    componentsDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error });
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            // When accessing 'props' in a Components we need to use 'this':
            return this.props.children;
        }
    }
}

export default ErrorBoundary;