import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => (

    <div className={classes.CheckoutSummary}>
        <h4 style={{marginBottom:'30px'}}>So here's Your Burger , Hope You Will Love The Taste</h4>
        <div style={{ width:'100%' , margin:'auto'  }}>
            <Burger ingredients={props.ingredient} />
        </div>
        <Button btnType="Danger" clicked={props.Cancelled}>Cancel</Button>
        <Button btnType="Success" clicked={props.Continued}>Continue</Button>
    </div>
);

export default checkoutSummary;