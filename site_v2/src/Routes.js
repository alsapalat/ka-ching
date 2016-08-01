import React from 'react';
import { Provider } from 'react-redux';
import { 
	IndexRoute, 
	Router, 
	Route, 
	browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './Stores';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

import Layout from './Layout';

//PAGE
import App from './pages/home/App';

//ROUTES
import { seederRoute } from './pages/seeder/route';

export const Routes = () =>{
	return(
		<Provider store={ store }>
			<Router history={ history } onUpdate={()=>{ window.scrollTo(0,0);}}>
				<Route path="/" component={ Layout }>
					<IndexRoute component={ App }/>
					{ seederRoute() }
				</Route>
			</Router>
		</Provider>
	)
}