import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { Navbar } from '../components/ui/Navbar'

import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'

export const DashboardRouters = () => {
    return (
        <div>
            <Navbar />

            <div className='container mt-2'>
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/heroe/:heroeId" component={ HeroScreen } />
                    
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </div>
    )
}
