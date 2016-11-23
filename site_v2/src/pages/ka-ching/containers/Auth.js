import React, { Component } from 'react';
import history from 'react-router/lib/browserHistory';

class Auth extends Component{

	render(){

		const mode = this.props.params.mode || "login";

		return(
			<div>
				<div className="auth-wrapper well col-md-6 col-md-offset-3 text-center">

					<div className="row">
						<div className="col-md-12">
							<h1>{(mode === "login") ? "Login" : "Register"}</h1>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12">
							<input type="email" autoFocus placeholder="Email..." className="form-control"/>
						</div>
						<div className="col-md-12">
							<input type="password" placeholder="Password..." className="form-control"/>
						</div>
						{(mode !== "login") ? 
							<div className="col-md-12">
								<input type="password" placeholder="Confirm Password..." className="form-control"/>
							</div>
							: null
						}
						<div className="col-md-12">
							<input type="checkbox" onClick={()=>{
								history.push(`/ka-ching/auth/${(mode === "login") ? "register" : "login"}`)
							}} checked={(mode === "login") ? false : true}/>
							<span> I don't have an account.</span>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<button className="btn btn-default btn-block">{(mode === "login") ? "Login" : "Register"}</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Auth