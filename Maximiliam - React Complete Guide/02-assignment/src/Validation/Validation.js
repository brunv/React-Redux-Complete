import React from 'react';

const validation = (props) => {

    let lengthWarning = null;

    if (props.inputLength <= 5) {
        lengthWarning = <p>Text is too short!</p>;
    } else if (props.inputLength > 10) {
        lengthWarning = <p>Text is too long!</p>;
    }

    return (
        <div>
            <p>{props.inputLength}</p>
            {lengthWarning}
        </div>
    )
}

export default validation;