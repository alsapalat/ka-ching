import * as c from './constants';

export function seed_butler(state = c.INITIAL_STATE, action){
	switch(action.type){
		case c.SEED_BUTLER_UPDATE_SELECTED_USERS:
			return Object.assign({},state,{
				selected_users: action.data
			})
		case c.SEED_BUTLER_UPDATE_SELECTED_AUCTIONS:
			return Object.assign({},state,{
				selected_auctions: action.data
			})
		default:
			return state;
	}
}