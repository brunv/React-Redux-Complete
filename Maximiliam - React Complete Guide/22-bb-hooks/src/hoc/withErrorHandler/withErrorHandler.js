import React, { useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    // this returns an anonymous functional component:
    return props => {
        const [error, setError] = useState(null);

        // this works like componentWillMount() by just being outside the return:
        const reqInterceptor = axios.interceptors.request.use(req => {
            setError(null);
            return req;
        })

        const resInterceptor = axios.interceptors.response.use(res => res, err => {
            setError(err);
            return Promise.reject(err);
        });

        // this runs when unmounting the component:
        useEffect(() => {
            // Remove the interceptor to prevent memory leaks:
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            };
        }, [reqInterceptor, resInterceptor]);

        const errorConfirmedHandler = () => {
            setError(null);
        }

        return (
            <React.Fragment>
                <Modal
                    show={error}
                    modalClosed={errorConfirmedHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </React.Fragment>
        );

    }
};

export default withErrorHandler;