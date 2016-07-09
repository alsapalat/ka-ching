import * as c from './Constants'

function onModalShow(modal){
	return {
		type: c.MODAL_SHOW,
		modal
	}
}

function onModalHide(){
	return{
		type: c.MODAL_HIDE
	}
}

function onModalOnChange(data){
	return{
		type: c.MODAL_ON_CHANGE,
		data
	}
}

function onModalOnWaiting(params){
	return{
		type: c.MODAL_ON_WAITING,
		params
	}
}

export function modalShow(modal){
	return dispatch=>{
		return dispatch(onModalShow(modal));
	}
}

export function modalHide(){
	return dispatch=>{
		return dispatch(onModalHide());
	}
}

export function modalOnChange(data){
	return dispatch =>{
		return dispatch(onModalOnChange(data))
	}
}

export function modalOnWaiting(params){
	return dispatch => {
		return dispatch(onModalOnWaiting(params));
	}
}