import { BrowserRouter  as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import React from 'react';
import AppConnector from './reduxConnectors/App';


export const Routes = () => 
<Router>
    <Route path="/">
        <Route component={Nav}/>
        <Route component={AppConnector}/>
    </Route>
    <Route path="/" />
</Router>
