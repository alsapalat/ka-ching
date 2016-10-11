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

import TemplateForm from './common/templates';
import CSVNormalizer from './common/csv_normalizer';
import CSVParser from './common/tehCSVParser/SUC-NF-Research-Extension-Forms';
import Seeder from './common/tehSeeder';
import NavStyle from './pages/nav_style1';

//PAGE
import App from './pages/home/App';
import ButlerSimulator from './pages/butler_simulator';
import TableSample from './pages/table_sample';

//ROUTES
import { seederRoute } from './pages/seeder/route';

import { kachingRoute } from './pages/ka-ching/Routes';

export const Routes = () =>{
	return(
		<Provider store={ store }>
			<Router history={ history } onUpdate={()=>{ window.scrollTo(0,0);}}>
				<Route path="/nav-style" component={ NavStyle }/>
				<Route path="/templates" component={ TemplateForm }/>
				<Route path="/csv-normalizer" component={ CSVNormalizer }/>
				<Route path="/csv-parser" component={ CSVParser}/>
				{ kachingRoute() }
				<Route path="/" component={ Layout }>
					<IndexRoute component={ App }/>
					<Route path="/sample-table" component={ TableSample }/>
					<Route path="/seeder" component={ Seeder }/>
					{ seederRoute() }
				</Route>

				<Route path="/butler-simulator" component={ ButlerSimulator }/>

			</Router>
		</Provider>
	)
}