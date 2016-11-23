import React from 'react'

const InputItem = ({ handleClick, label, data, className }) =>{

	let query = {};

	return(
		<div 
			className={`btn-list ${className}`}
			onClick={(e)=>{
				handleClick(data);
			}}
			ref = {node => query = node}>
			<div className="btn-list-content">{label}</div>
		</div>
	)
}

export default InputItem