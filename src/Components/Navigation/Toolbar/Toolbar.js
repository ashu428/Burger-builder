import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SIdeDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.DrawerToggleClicked}/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>

);
export default toolbar;