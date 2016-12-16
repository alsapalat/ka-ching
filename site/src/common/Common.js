import React from 'react';
import './style.css';

import Alert from 'react-s-alert';

export const Label = ({label, onChange, value, name, disabled}) => (
	<div>
		<div className="text-left">
			<label>{label}</label>
			<input 
				disabled={disabled}
				name={name}
				onChange={(onChange) ? onChange : (e) => { e.preventDefault(); }}
				className="form-control"
				value={value}/>
		</div>
	</div>
)

export const Toss = ({message, type, timeout}) => {
	/*let t = timeout || 2000;*/
	switch(type){
		case "error":
			return Alert.error(message);
		case "warning":
			return Alert.warning(message);
		default: 
			return Alert.success(message);
	}
} 