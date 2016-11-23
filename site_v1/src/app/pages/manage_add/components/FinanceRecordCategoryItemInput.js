import React from 'react'

const FinanceRecordCategoryItemInput = ({ handleChange, label, data }) =>{

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
				name = "name"
				className = "form-control"
				onChange = { onChange }
				placeholder = "Item Name..."
				value = { data.name }/>

			<input 
				style = {{marginTop: "5px"}}
				name = "price"
				className = "form-control"
				onChange = { onChange }
				placeholder = "Item Price..."
				value = { data.price }/>

			<textarea 
				style = {{marginTop: "5px"}}
				name = "note"
				row = "4"
				className = "form-control"
				onChange = { onChange }
				placeholder = "Note..."
				value = { data.note }/>
		</div>
	)
}

export default FinanceRecordCategoryItemInput