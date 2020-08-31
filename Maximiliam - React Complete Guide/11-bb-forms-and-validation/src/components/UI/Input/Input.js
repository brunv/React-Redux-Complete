import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;

    const { inputType, ...rest } = props;
    switch (inputType) {
        case ('input'):
            inputElement = <input className={classes.InputElement} {...rest} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.InputElement} {...rest} />;
            break;
        default:
            inputElement = <input className={classes.InputElement} {...rest} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;