import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios-orders';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

const BurgerBuilder = props => {
    // UI State only (co-exist with Redux):
    const [purchasing, setPurchasing] = useState(false);

    useEffect(() => {
        props.onInitIngredients();
    }, []);

    const updatePurchaseState = ingredients => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        return sum > 0;
        // console.log(Object.values(ingredients)); [0,0,1,0]
        // this.setState({ purchasable: Object.values(ingredients).some(amount => amount > 0) });
    }

    const purchasable = () => {
        let sum = 0;
        for (let key in props.ings) {
            sum += props.ings[key];
        }

        return sum > 0;
    }

    const purchaseHandler = () => {
        if (props.isAuthenticated) {
            setPurchasing(true);
        } else {
            props.onSetAuthRedirectPath('/checkout');
            props.history.push('/auth');
        }
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        props.onInitPurchased();
        props.history.push('/checkout');
    }

    const disabledInfo = {
        ...props.ings
    };

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

    if (props.ings) {
        burger = (
            <React.Fragment>
                <Burger ingredients={props.ings} />
                <BuildControls
                    ingredientAdded={props.onIngredientAdded}
                    ingredientRemoved={props.onIngredientRemoved}
                    disabled={disabledInfo}
                    // purchasable={this.updatePurchaseState(this.props.ings)}
                    purchasable={purchasable()}
                    ordered={purchaseHandler}
                    price={props.price}
                    isAuth={props.isAuthenticated} />
            </React.Fragment>
        );

        orderSummary = <OrderSummary
            ingredients={props.ings}
            price={props.price}
            purchaseCancelled={purchaseCancelHandler}
            purchaseContinued={purchaseContinueHandler} />
    }

    return (
        <React.Fragment>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </React.Fragment>
    );
}

// mapping state from combined reducers:
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchased: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));