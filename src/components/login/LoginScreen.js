import React, { useContext } from 'react';

import { AuthContext } from '../../auth/authContext';
import { type } from '../../types/type';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);
    

    const handleLogin = () => {
        // history.push('/');
        //history.replace('/');
        
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: type.login,
            payload: {
                name:'Vicente'
            }
        })
        history.replace( lastPath );
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
