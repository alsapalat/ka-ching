import * as c from './Constants'

export function modal(state = c.INITIAL_STATE, action){
	switch(action.type){
		case c.MODAL_SHOW:
			return Object.assign({},state, action.modal);
		case c.MODAL_HIDE:
			return c.INITIAL_STATE
		case c.MODAL_ON_CHANGE:
			return Object.assign({},state, {
				data: {
					...state.data,
					...action.data
				}
			})
		case c.MODAL_ON_WAITING:
			return Object.assign({},state, {
				loading: action.params
			})
		default: 
			return state;
	}
}