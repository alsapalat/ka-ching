import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as c from './Constants'

const common = (state = c.INITIAL_COMMON, action) => {
	switch(action.type){
		case c.COMMON_IS_LOADING:
			return Object.assign({},state,{
				is_loading: action.is_loading
			});
		default:
			return state;
	}
}

const app = combineReducers({
	routing: routerReducer,
	common
})

export default app;