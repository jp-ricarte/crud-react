import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './Welcome';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Welcome} />
        <Route path="/App" component={App} />
    </Switch>
</BrowserRouter>    
, document.getElementById('root'));


