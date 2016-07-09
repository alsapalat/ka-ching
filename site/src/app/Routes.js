import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import IndexRoute from 'react-router/lib/IndexRoute';

import browserHistory from 'react-router/lib/browserHistory';
import configureStore from './Stores';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

import Layout from './Layout';
import Home from './pages/home';
import Summary from './pages/summary/';
import Add from './pages/manage_add/';
import View from './pages/manage_view/';

class Routes extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Router history={ history }>
                    <Route path="/" component={ Layout }>
                        <IndexRoute 
                            component={ Home } /> 
                        <Route path="/summary" component={ Summary }/>
                        <Route path="/add(/:type)" component={ Add } />
                        <Route path="/view" component={ View }/>
                    </Route>
                </Router>
            </Provider>
        );
    }
}

export default Routes
