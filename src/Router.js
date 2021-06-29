import React , {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home/Home.js';
import BoardsManager from './views/BoardsManager/BoardsManager.js';
import Error404 from './views/Error404/Error404.js';
import HeaderNav from './components/HeaderNav/HeaderNav.js'

class Router extends Component {

    render() { 
        return (
            <BrowserRouter>
                <HeaderNav />
                <Switch>
                    <Route path="/home" component={Home} exact /> 
                    <Route path="/boards-manager/:id" component={BoardsManager} exact /> 
                    <Route path="*" component={Error404} exact />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router