import React from 'react';
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AdExpensePage from '../components/AdExpensePage';
import createHistory from 'history/createBrowserHistory';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from  '../components/LoginPage';

//create 6 new files.
//setup imports.
//import into appRouter.

export const history = createHistory();


const AppRouter = () =>(
    <Router history = {history}>
        <div>
            <Header/> 
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <Route path="/dashboard" component={ExpenseDashboardPage}/>
                <Route path="/create" component={AdExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;

