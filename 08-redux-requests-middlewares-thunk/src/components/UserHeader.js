import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    render() {
        // const user = this.props.users.find((user) => user.id === this.props.userId);
        // We moved this logic to mapStateToProps to turn this component into a reusable
        // one by making it accept just one user instead of a list of users.

        const { user } = this.props;

        if (!user) {
            return null;
        }

        return (
            <div className="header">
                {user.name}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // ownProps is a copy of the 'props' that is passed to the component.
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);