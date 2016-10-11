import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Layout from './containers';
import Home from './containers/Home';

export const kachingRoute = () => {
	return(
		<Route path="/ka-ching" component={ Layout }>
			<IndexRoute component={ Home }/>			
		</Route>
	)
}