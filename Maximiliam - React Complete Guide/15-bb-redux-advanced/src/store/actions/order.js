import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

/* ACTION CREATORS: */
export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

// use redux thunk:
export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
        axios.post('/order.json', orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
    };
};