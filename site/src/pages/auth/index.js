import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './Actions'

import './style.css'

class Auth extends Component {

	state ={
		mode: "",
		email: "",
		password: "",
		confirm_password: ""
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) =>{
		e.preventDefault();
		switch(this.state.mode){
			case 'signIn':
				return console.log("SIGN IN!");
			case 'signUp':
				return console.log("SIGN UP!");
			default: 
				return this.props.checkEmail({
					email: this.state.email
				}, this.handleCallback)
		}
	}

	handleCallback = (payload) => {
		if(!payload)
			return this.setState({
				mode: "signUp"
			})
		return this.setState({
			mode: "signIn"
		})
	}

	_renderSubmit = () => {
		switch(this.state.mode){
			case 'signIn':
				return <button className="btn btn-default btn-lg">Sign in</button>
			case 'signUp':
				return <button className="btn btn-default btn-lg">Sign up</button>
			default: 
				return <button className="btn btn-default btn-lg">Next</button>				
		}
	}

	render(){

		return(
			<div className="login-wrapper text-center">
				<h1>Welcome</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input 
							name="email"
							type="email" 
							placeholder="Enter your email..."
							className="form-control"
							onChange={this.handleChange}/>
						<hr />
						{this._renderSubmit()}
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
)(Auth);