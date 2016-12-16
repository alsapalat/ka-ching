import React, { Component } from 'react';

import './style.css';

class Auth extends Component {
	
	render(){
		return(
			<div className="login-wrapper text-center">
				{this.props.children}
			</div>
		)
	}
}

export default Auth;