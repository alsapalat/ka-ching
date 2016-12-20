import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Label } from "../../common/Common"

import * as actions from './Actions';

import { Link } from 'react-router';

class AuthSignUp extends Component {

	state = {
		email: "",
		password: "",
		password_confirmation: ""
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.signUp(this.state);

	}

	render(){
		return(
			<div className="login-container">
					<h2><span>Sign Up</span></h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<Label 
								name="email"
								label="Email"
								type="email"
								onChange={this.handleChange}
								value={this.state.email}/>

							<Label 
								autoFocus
								name="password"
								label="Password"
								type="password"
								onChange={this.handleChange}
								value={this.state.password}/>

							<Label 
								name="password_confirmation"
								label="Confirm Password"
								type="password"
								onChange={this.handleChange}
								value={this.state.password_confirmation}/>
							<hr />
							<button className="btn btn-default btn-lg">Sign Up</button>
							<hr />
							<div>
								<label>Already Registered? <Link to="/auth/sign-in">Sign In Here</Link></label>
							</div>
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
)(AuthSignUp);