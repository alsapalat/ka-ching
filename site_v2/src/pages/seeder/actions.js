import * as c from './constants';

export function updateSelectedUsers(data){
	return{
		type: c.SEED_BUTLER_UPDATE_SELECTED_USERS,
		data
	}
}

export function updateSelectedAuctions(data){
	return{
		type: c.SEED_BUTLER_UPDATE_SELECTED_AUCTIONS,
		data
	}
}

export function seedButler(data){
	return dispatch => {
		console.log("Seed Butlers", data);
		return;
	}
}