import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

export const PrivateRouters = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route {...rest}
            component = { (prop) => (
                (isAuthenticated)
                    ? <Component {...prop} />
                    : <Redirect to='/login' />
            )}
        />
    )
}


PrivateRouters.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
