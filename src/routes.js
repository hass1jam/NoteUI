import { BrowserRouter  as Router, Route, hashi } from 'react-router-dom';
import App from './components/App';
import Nav from './components/Nav';
import React from 'react';


export const Routes = () => 
<Router>
    <Route path="/">
        <Route component={Nav}/>
        <Route component={App}/>
    </Route>
</Router>