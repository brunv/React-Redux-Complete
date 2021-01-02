import React, { useState } from 'react';
import { connect } from "react-redux";

import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import { validationCheck } from "../../../shared/validation";

const ContactData = props => {
    const [orderForm, setOrderForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5
            },
            valid: false,
            touched: false
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Country'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your Email'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'fastest', displayValue: 'Fastest' },
                    { value: 'cheapest', displayValue: 'Cheapest' },
                ]
            },
            value: 'fastest',
            validation: {},
            valid: true
        }
    });
    const [formIsValid, setFormIsValid] = useState(false);

    const orderHandler = (e) => {
        e.preventDefault();

        const formData = {};
        for (let formELementIdentifier in orderForm) {
            formData[formELementIdentifier] = orderForm[formELementIdentifier].value;
        }

        const order = {
            ingredients: props.ings,
            price: props.price,
            orderData: formData,
            userId: props.userId
        };

        props.onOrderBurger(order, props.token);
    }

    const inputChangedHandler = (e, inputIdentifier) => {
        // Make a copy of the whole state:
        const updatedOrderForm = {
            ...orderForm
        };
        // Make a copy of the identifier only: (name, street, email...):
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        // Update the 'value' in the indentifier:
        updatedFormElement.value = e.target.value;
        // Go through validation check:
        updatedFormElement.valid = validationCheck(updatedFormElement.value, updatedFormElement.validation);
        // Marks that the user has touched this field:
        updatedFormElement.touched = true;
        // Replace the updated identifier in the copied state object:
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        // console.log(updatedFormElement);
        // Check if all inputs are valid:
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        // Make it official by updating the real state:
        setOrderForm(updatedOrderForm);
        setFormIsValid(formIsValid);
    }

    const formElementsArray = [];

    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        })
    }

    let form = (
        <form onSubmit={orderHandler}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(e) => inputChangedHandler(e, formElement.id)} />
            ))}
            <Button btnType="Success" disabled={!formIsValid}>ORDER</Button>
        </form>
    );

    if (props.loading) {
        form = <Spinner />;
    }

    return (
        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));