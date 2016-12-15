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

//import TemplateForm from './common/templates';
import CSVNormalizer from './common/csv_normalizer';
import CSVParser from './common/tehCSVParser';

import NONSUC_e_Forms_A from './common/tehCSVParser/NONSUC-e-Forms-A'
import NONSUC_e_Forms_B_C from './common/tehCSVParser/NONSUC-e-Forms-B-C'
import NONSUC_Form_E5_Faculty_Form from './common/tehCSVParser/NONSUC-Form-E5-Faculty-Form'
import NONSUC_PRC_List_of_Graduates from './common/tehCSVParser/NONSUC-PRC-List-of-Graduates'
import SUC_NF_FORM_A from './common/tehCSVParser/SUC-NF-FORM-A'
import SUC_NF_FORM_B from './common/tehCSVParser/SUC-NF-FORM-B'
import SUC_NF_FORM_E1 from './common/tehCSVParser/SUC-NF-FORM-E1'
import SUC_NF_FORM_E2 from './common/tehCSVParser/SUC-NF-FORM-E2'
import SUC_NF_FORM_GH from './common/tehCSVParser/SUC-NF-FORM-GH'
import SUC_NF_Research_Extension_Forms from './common/tehCSVParser/SUC-NF-Research-Extension-Forms'
import SUC_PRC_List_of_Graduates from './common/tehCSVParser/SUC-PRC-List-of-Graduates'
import Traffic_Violation from './common/tehCSVParser/Traffic-Violation'

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
				{/*<Route path="/templates" component={ TemplateForm }/>*/}
				<Route path="/csv-normalizer" component={ CSVNormalizer }/>
				<Route path="/csv-parser" component={ CSVParser }>
					<IndexRoute component={ NONSUC_e_Forms_A } />
					<Route path="/csv-parser/NONSUC-e-Forms-A"component={ NONSUC_e_Forms_A } />
					<Route path="/csv-parser/NONSUC-e-Forms-B-C" component={ NONSUC_e_Forms_B_C } />
					<Route path="/csv-parser/NONSUC-Form-E5-Faculty-Form" component={ NONSUC_Form_E5_Faculty_Form } />
					<Route path="/csv-parser/NONSUC-PRC-List-of-Graduates" component={ NONSUC_PRC_List_of_Graduates } />
					<Route path="/csv-parser/SUC-NF-FORM-A" component={ SUC_NF_FORM_A } />
					<Route path="/csv-parser/SUC-NF-FORM-B" component={ SUC_NF_FORM_B } />
					<Route path="/csv-parser/SUC-NF-FORM-E1" component={ SUC_NF_FORM_E1 } />
					<Route path="/csv-parser/SUC-NF-FORM-E2" component={ SUC_NF_FORM_E2 } />
					<Route path="/csv-parser/SUC-NF-FORM-GH" component={ SUC_NF_FORM_GH } />
					<Route path="/csv-parser/SUC-NF-Research-Extension-Forms" component={ SUC_NF_Research_Extension_Forms } />
					<Route path="/csv-parser/SUC-PRC-List-of-Graduates" component={ SUC_PRC_List_of_Graduates } />
					<Route path="/csv-parser/Traffic-Violation" component={ Traffic_Violation } />
				</Route>
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