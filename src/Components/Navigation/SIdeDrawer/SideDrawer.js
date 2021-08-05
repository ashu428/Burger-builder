import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Auxillary from '../../../HOC/Auxillary/Auxillary';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.Show) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Auxillary>

            <BackDrop Show={props.Show} cancel={props.Clicked} />

            <div className={attachedClasses.join(' ')}>


                <nav>

                    <NavigationItems />

                </nav>
            </div>
        </Auxillary>
    )

};

export default sideDrawer;