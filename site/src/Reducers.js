import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const app = combineReducers({
	routing: routerReducer
})

export default app;