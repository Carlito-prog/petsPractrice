import React from 'react';
import {StaticRouter  as Router, Switch, Route} from "react-router-dom";
import DefaultLayout from './layouts/default'
import {createMemoryHistory } from 'history';

import Home from './home'

const history = createMemoryHistory();

const app = () => {
    
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    )
}


export default app