import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './Actions';

import { Link } from 'react-router';

class AuthThankYou extends Component {

	render(){

		const redirect = this.props.location.query.redirect || "/auth/sign-in"

		return(
			<div className="login-container">
					<h2><span>You are now Registered!</span></h2>
					<div>
						<label>You can now <Link to={redirect}>sign-in</Link></label>
					</div>
				</div>
		)
	}
}

export default connect(
	state => {
		return{

		}
	},
	actions
)(AuthThankYou);