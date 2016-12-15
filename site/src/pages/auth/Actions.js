import * as commonAction from '../../Actions';

export const checkEmail = (payload, callback) => 
	(dispatch, getState, { api, history }) => {
		dispatch(commonAction.isLoading(true))
		api.post(`/verify/email`, payload, dispatch)
		.then(res => {
			if(!res){
				return dispatch(commonAction.isLoading(false))
			}
	
			callback({
				display_name: res.data.display_name
			});

			dispatch(commonAction.isLoading(false))
		})
}