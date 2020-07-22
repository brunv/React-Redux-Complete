import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css'

const burger = (props) => {

    const ingredientElements = [];
    for (let key in props.ingredients) {
        for (let i = 0; i < props.ingredients[key]; i++) {
            ingredientElements.push(<BurgerIngredient key={key + i} type={key} />);
        }
    }

    console.log(ingredientElements);

    if (ingredientElements.length === 0) {
        ingredientElements.push(<p key="" >Please start adding elements.</p>);
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientElements}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;