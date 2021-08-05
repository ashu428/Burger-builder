import React from 'react';

import classes from './NavigationItems.css';

const navigationItems = () => (
    <ul className={classes.Navigationitems}>
        <li>
            <a href="/">Burger Builder</a>
            <a href="/">CheckOut</a>
        </li>
    </ul>
);

export default navigationItems;