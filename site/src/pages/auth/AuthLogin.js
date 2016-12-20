import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Label } from "../../common/Common"

import * as actions from './Actions';

class AuthLogin extends Component {

	state = {
		email: ""
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.checkEmail(this.state);
	}

	render(){
		return(
			<div className="login-container">
					<h2><span>Welcome</span></h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<Label 
								autoFocus
								name="email"
								label="Email"
								type="email"
								onChange={this.handleChange}
								value={this.state.email}/>
							<hr />
							<button className="btn btn-default btn-lg">Next</button>
						</div>
					</form>
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
)(AuthLogin);