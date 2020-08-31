import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;

    const { elementType, elementConfig, value, ...rest } = props;

    switch (elementType) {
        case ('input'):
            inputElement = <input
                className={classes.InputElement}
                {...elementConfig}
                value={value} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={classes.InputElement}
                {...elementConfig}
                value={value} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={value}>
                    {elementConfig.options.map(opt => (
                        <option key={opt.value} value={opt.value}>
                            {opt.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={classes.InputElement}
                {...elementConfig}
                value={value} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;