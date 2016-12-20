import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Label } from "../../common/Common"

import * as actions from './Actions';

import { Link } from 'react-router';

class AuthSignIn extends Component {

	state = {
		email: "",
		password: "",
		display_name: ""
	}

	componentWillMount(){
		let email = this.props.location.query.email || "";
			
		let name = this.props.location.query.name || "";

		this.setState({
			email,
			display_name: (name === "null") ? "" : name
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.signIn(this.state);
	}

	render(){
		return(
			<div className="login-container">
					<h2><span>Sign In</span></h2>
					<h2><span>{this.state.display_name}</span></h2>
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
							<hr />
							<button className="btn btn-default btn-lg">Sign In</button>
							<hr />
							<div>
								<label>Not yet Registered? <Link to="/auth/sign-up">Sign Up Here</Link></label>
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
)(AuthSignIn);