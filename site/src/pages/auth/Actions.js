import * as commonAction from '../../Actions';

import Alert from 'react-s-alert';

export const checkEmail = (payload) => 
	(dispatch, getState, { api, history }) => {
		dispatch(commonAction.isLoading(true))
		api.get(`/verify/email`, payload, dispatch)
		.then(res => {
			if(!res){
				return dispatch(commonAction.isLoading(false))
			}

			dispatch(commonAction.isLoading(false))

			if(res.data.status)
				return history.push(`/auth/sign-in?email=${payload.email}&name=${res.data.credential.display_name}`)

			return history.push(`/auth/sign-up?email=${payload.email}`)
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

			sessionStorage.setItem('token', res.data.token);
			sessionStorage.setItem('profile', JSON.stringify(res.data.credential))

			history.push('/')
	
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

			history.push(`/auth/thankyou?redirect=/auth/sign-in?email=${res.data.credential}`)
	
			dispatch(commonAction.isLoading(false))
		})
}

export const saveProfile = (id, payload) =>
	(dispatch, getState, { api, history }) => {
		dispatch(commonAction.isLoading(true))
		api.post(`/user/updateprofile`, payload, dispatch)
		.then(res => {
			if(!res){
				return dispatch(commonAction.isLoading(false))
			}

			Alert.success(res.data.message);
	
			sessionStorage.setItem('profile', JSON.stringify(res.data.credential))
	
			dispatch(commonAction.isLoading(false))
		})
}

	