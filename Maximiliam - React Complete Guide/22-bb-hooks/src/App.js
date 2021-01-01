import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
// import asyncComponent from './hoc/asyncComponent/asyncComponent';

/* Lazy Loading some components: */
// const asyncCheckout = asyncComponent(() => {     // old way with asyncComponent
const Checkout = React.lazy(() => {
    return import('./containers/Checkout/Checkout');
});

const Orders = React.lazy(() => {
    return import('./containers/Orders/Orders');
});

const Auth = React.lazy(() => {
    return import('./containers/Auth/Auth');
});

const App = (props) => {

    useEffect(() => {
        props.onTryAutoSignin();
    }, []);

    let routes = (
        <Switch>
            <Route path="/auth" render={() => <Auth />} />
            <Route path="/" component={BurgerBuilder} />
            <Redirect to="/" />
        </Switch>
    );

    if (props.isAuthenticated) {
        routes = (
            <Switch>
                <Route path="/checkout" render={() => <Checkout />} />
                <Route path="/orders" render={() => <Orders />} />
                <Route path="/logout" component={Logout} />
                <Route path="/auth" render={() => <Auth />} />
                <Route path="/" component={BurgerBuilder} />
            </Switch>
        );
    }

    return (
        <div>
            <Layout>
                <Suspense fallback={<p>Loading...</p>}>
                    {routes}
                </Suspense>
            </Layout>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignin: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));