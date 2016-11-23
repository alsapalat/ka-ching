export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_HIDE = 'MODAL_HIDE';
export const MODAL_ON_CHANGE = 'MODAL_ON_CHANGE';
export const MODAL_ON_WAITING = 'MODAL_ON_WAITING';

export const INITIAL_STATE = {
	show: false,
	id: '',
	loading: false,
	data: {},
	save: (() => console.log("Save!")),
	properties: {}
}

