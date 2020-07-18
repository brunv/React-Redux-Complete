import React from 'react';

const withStyledComponent = (WrappedComponent, StyledComponent) => {
    // In this case we have to forward props to be used within the WrappedComponent
    return props => (
        <StyledComponent>
            <WrappedComponent {...props} />
        </StyledComponent>
    );
};

export default withStyledComponent;