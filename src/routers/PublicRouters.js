import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

export const PublicRouters = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component = { (prop) => (
                ( !isAuthenticated)
                    ? <Component {...prop} />
                    : <Redirect to='/' />
            )}
        />
    )
}


PublicRouters.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
