import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        {props.isAuthenticated
            ? <NavigationItem link="/logout">Log Out</NavigationItem>
            : <NavigationItem link="/auth">Authenticate</NavigationItem>}
    </ul>
);

export default NavigationItems;