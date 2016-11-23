import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Layout from './containers';
import Home from './containers/Home';
import Search from './containers/Search';
import Auth from './containers/Auth';

export const kachingRoute = () => {
	return(
		<Route path="/ka-ching" component={ Layout }>
			<IndexRoute component={ Home }/>	
			<Route path="/ka-ching/search" component={ Search }/>
			<Route path="/ka-ching/auth(/:mode)" component={ Auth }/>
		</Route>
	)
}