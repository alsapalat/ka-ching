import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


import { seed_butler } from './pages/seeder/reducers'

const app = combineReducers({
	routing: routerReducer,
	seed_butler
})

export default app;