import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { modal } from './common/modal/Reducers'

const app = combineReducers({
    routing: routerReducer,
    modal
})

export default app;