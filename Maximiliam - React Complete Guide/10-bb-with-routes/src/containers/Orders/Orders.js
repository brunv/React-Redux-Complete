import React from 'react';

import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends React.Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                // console.log(res.data);
                const fetchedOrders = [];

                for (let key in res.data) {
                    // console.log(res.data[key]);
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }

                this.setState({ orders: fetchedOrders, loading: false });
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);