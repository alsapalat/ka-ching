import React from 'react'

const ModalInput = ({ name, handleChange, label, value }) =>{

	const onChange = (e) =>{
		let n = {}
		n[e.target.name] = e.target.value;
		handleChange(n);
	}

	return(
		<div>
			<label>{label}</label>
			<input 
				autoFocus
				name = { name }
				className = "form-control"
				onChange = { onChange }
				value = { value }/>
		</div>
	)
}

export default ModalInput