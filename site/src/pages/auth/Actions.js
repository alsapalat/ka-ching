import * as commonAction from '../../Actions';

export const checkEmail = (payload, callback) => 
	(dispatch, getState, { api, history }) => {
		dispatch(commonAction.isLoading(true))
		api.get(`/verify/email`, payload, dispatch)
		.then(res => {
			if(!res){
				return dispatch(commonAction.isLoading(false))
			}

			dispatch(commonAction.isLoading(false))

			if(res.data.status)
				return callback({
					display_name: res.data.credential.display_name
				});

			return callback(false);			

			
		})
}

export const signIn = (payload) => 
	(dispatch, getState, { api, history }) => {
		dispatch(commonAction.isLoading(true))
		api.post(`/auth`, payload, dispatch)
		.then(res => {
			if(!res){
				return dispatch(commonAction.isLoading(false))
			}

			console.log("SIGN IN RESPONSE", res);
	
			dispatch(commonAction.isLoading(false))
		})
}

export const signUp = (payload) => 
	(dispatch, getState, { api, history }) => {
		dispatch(commonAction.isLoading(true))
		api.post(`/signup`, payload, dispatch)
		.then(res => {
			if(!res){
				return dispatch(commonAction.isLoading(false))
			}

			console.log("SIGN UP RESPONSE", res);
	
			dispatch(commonAction.isLoading(false))
		})
}