import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import React from 'react';
import AppConnector from './reduxConnectors/App';
import Note from './components/Note';
import { NoMatch } from './components/NoMatch';


export const Routes = () => 
<Router>
    <Nav/>
    <Switch>
        <Route exact path="/">
            <Route component={AppConnector}/> 
        </Route>
        <Route path="/note/:id" component={Note} />
        <Route path="*">
            <NoMatch/>
        </Route>
    </Switch> 
</Router>
