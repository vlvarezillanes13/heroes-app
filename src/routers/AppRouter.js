import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
  
import { AuthContext } from '../auth/authContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouters } from './DashboardRouters';

import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './PublicRouters';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>     
            <div>
                <Switch>
                    <PublicRouters 
                        exact 
                        path="/login" 
                        component={LoginScreen} 
                        isAuthenticated = { user.logged }
                    />

                    <PrivateRouters 
                        path="/" 
                        component= { DashboardRouters } 
                        isAuthenticated = { user.logged }
                    />

                </Switch>
            </div>
        </Router>

    )
}
