import { useState, useEffect } from 'react';

export default httpClient => {
    const [error, setError] = useState(null);

    // this works like componentWillMount() by just being outside the return:
    const reqInterceptor = httpClient.interceptors.request.use(req => {
        setError(null);
        return req;
    })

    const resInterceptor = httpClient.interceptors.response.use(res => res, err => {
        setError(err);
        return Promise.reject(err);
    });

    // this runs when unmounting the component:
    useEffect(() => {
        // Remove the interceptor to prevent memory leaks:
        return () => {
            httpClient.interceptors.request.eject(reqInterceptor);
            httpClient.interceptors.response.eject(resInterceptor);
        };
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
        setError(null);
    };

    return [error, errorConfirmedHandler];
}