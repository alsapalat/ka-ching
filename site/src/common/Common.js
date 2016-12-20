import React, { Component } from 'react';
import './style.css';

import Alert from 'react-s-alert';

export const Label = ({label, onChange, value, name, disabled, type, autoFocus}) => (
	<div>
		<div className="text-left">
			<label>{label}</label>
			<input 
				disabled={disabled}
				autoFocus={autoFocus}
				name={name}
				type={type}
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

export class ImageUploader extends Component {

	state = {
		img: "/img/placeholder.jpg"
	}

	render(){
		return(
			<div className="img-upload-wrapper">
				<span>Upload</span>
				<img src={this.state.img} role="presentation"/>
			</div>
		)
	}
}