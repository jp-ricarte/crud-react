import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Welcome from '../Welcome'
import App from '../App';

const Routes = () =>(

<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Welcome} />
        <Route path="/App" component={App} />
    </Switch>
</BrowserRouter>  
);

export default Routes;