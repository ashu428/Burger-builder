import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

const burger = (props) => {

    let ReIngredients = Object.keys(props.ingredients)
    .map(igkey => {
        return [...Array(props.ingredients[igkey])]
        .map((_,index) => {
            return <BurgerIngredients key={igkey+index} type={igkey} />
        })
    }
        
    ).reduce((arr , el) => {
        return arr.concat(el)
    });

    if (ReIngredients.length === 0) {
        ReIngredients = <div>Select Some ingredients</div>
    }




    return (

        <div className={classes.Burger}>
            <BurgerIngredients type={'bread-top'}/>
            {ReIngredients}
            <BurgerIngredients type={'bread-bottom'}/>
        </div>
    )
}


export default burger;