import React from 'react';
import BuildControl from '../BuildControls/BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>

        <p>Price - <strong>{props.Price}$</strong></p>
        {controls.map(ctrl => {
            return <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                Added={() => props.ingredientsAdded(ctrl.type)} 
                Removed={() => props.ingredientsRemoved(ctrl.type)}/>
        })}
        <button className={classes.OrderButton}
        disabled={!props.Purchasable}
        onClick={props.ordered}>ORDER NOW</button>
    </div>
);



export default buildControls;