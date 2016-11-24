import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router/lib/Router';
import configureStore from './Stores';
import { routes } from './Routes';
import { syncHistoryWithStore } from 'react-router-redux'
import browserHistory from './History';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={ store }>
		<Router
			history={ history }
			routes={ routes}/>
	</Provider>,
	document.getElemenById('root')
);