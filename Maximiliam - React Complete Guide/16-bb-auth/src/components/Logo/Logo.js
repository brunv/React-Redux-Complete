import React from 'react';

// We have to make webpack aware of the image
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Burger App" />
    </div>
);

export default Logo;