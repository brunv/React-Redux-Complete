/* It's a good practice to name a HOC starting with 'With'.
   A HOC is a component that receives one or more component and
   returns another component.
*/
import React from 'react';

const withClass = (WrappedComponent, className) => {
    // This is a normal function that return a functional component:
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
}

export default withClass;