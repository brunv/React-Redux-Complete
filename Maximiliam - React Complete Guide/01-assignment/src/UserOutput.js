import React from 'react';
import './UserOutput.css'

const userOutput = ({ username }) => {
    return (
        <div className="UserOutput">
            <p>Some random text from {username}!</p>
            <p>Another random text :)</p>
        </div>
    );
};

export default userOutput;