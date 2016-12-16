import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './Actions'

import './style.css'

class Auth extends Component {

	state ={
		mode: "",
		display_name: "",
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
				return this.props.signIn({
					email: this.state.email,
					password: this.state.password
				})
			case 'signUp':
				return this.props.signUp({
					email: this.state.email,
					password: this.state.password,
					password_confirmation: this.state.password_confirmation
				})
			default: 
				return this.props.checkEmail({
					email: this.state.email
				}, this.handleCallback)
		}
	}

	handleBack = (e) => {
		e.preventDefault();
		this.setState({
			mode: "",
			display_name: ""
		})
	}

	handleCallback = (payload) => {
		if(!payload)
			return this.setState({
				mode: "signUp"
			})
		return this.setState({
			mode: "signIn",
			display_name: payload.display_name
		})
	}

	_renderSubmit = () => {
		switch(this.state.mode){
			case 'signIn':
				return(
					<div>
						<button className="hide"/>
						<button className="btn btn-default btn-lg pull-left" onClick={this.handleBack}>Not You?</button>
						<button className="btn btn-default btn-lg pull-right">Sign in</button>
					</div>)
			case 'signUp':
				return(
					<div>
						<button className="hide"/>
						<button className="btn btn-default btn-lg pull-left" onClick={this.handleBack}>Back</button>
						<button className="btn btn-default btn-lg pull-right">Sign up</button>
					</div>)
			default: 
				return <button className="btn btn-default btn-lg">Next</button>				
		}
	}

	_renderWelcome = () => {
		const { display_name, mode } = this.state;
		switch(mode){
			case 'signIn':
				return <span>{`Welcome, ${display_name}`}</span>
			case 'signUp':
				return <span>Sign Up</span>
			default: 
				return <span>Welcome</span>
		}
		
	}

	_renderInput = () => {
		switch(this.state.mode){
			case 'signIn':
				return(
					<div>
						<input 
							autoFocus
							name="email"
							type="password" 
							placeholder="Enter your password..."
							className="form-control"
							onChange={this.handleChange}/>
					</div>)
			case 'signUp':
				return(
					<div>
						<input 
							autoFocus
							name="password"
							type="password" 
							placeholder="Enter your password..."
							className="form-control"
							onChange={this.handleChange}/>		
						<input 
							name="password_confirmation"
							type="password" 
							placeholder="Confirm Password..."
							className="form-control"
							onChange={this.handleChange}/>				
					</div>)
			default: 
				return null;
		}
	}

	render(){

		return(
			<div className="login-wrapper text-center">
				<div className="login-container">
					<h2>{this._renderWelcome()}</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<input 
								name="email"
								type="email" 
								placeholder="Enter your email..."
								className="form-control"
								onChange={this.handleChange}/>
							{this._renderInput()}
							<hr />
							{this._renderSubmit()}
						</div>
					</form>
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
)(Auth);