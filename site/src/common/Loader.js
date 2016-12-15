import React, { Component } from 'react';

import './style.css'

class Navigation extends Component {

	render(){
		if(this.props.isLoading)
			return(
				<div className="loader-wrapper">
					<div className="loader-loading" />
				</div>
			)
		return null;
	}
}

export default Navigation;