import React from 'react'
import history from '../../middleware/history'

const BackButton = ({ link }) =>{

	let query = {};

	return(
		<div>
			<button
				className="btn-back"
				onClick={(e)=>{
					e.preventDefault();
					history.push(link);
				}}><i className="fa fa-caret-left"/></button>
		</div>
	)
}

export default BackButton