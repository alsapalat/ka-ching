import React from 'react';
import { IndexRoute, Route } from 'react-router';

import SeederLayout from './index';
import SeederUser from './pages/SeederUser';
import SeederButler from './pages/SeederButler';

export const seederRoute = () => {
	return(
		<Route path="/seed" component={ SeederLayout }>
			<IndexRoute component={ SeederUser }/>
			<Route path="/seed/user" component={ SeederUser }/>
			<Route path="/seed/butler" component={ SeederButler }/>
		</Route>
	)
}