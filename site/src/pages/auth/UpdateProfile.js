import React, { Component } from 'react';

import { Label, Toss } from '../../common/Common';

class UpdateProfile extends Component {

	state = {
		email: "",
		display_name: ""
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		
		if(this.state.display_name === "")
			return Toss({
				message: "Display name is required...",
				type: "warning"
			});
		
		console.log("Update Profile", {
			display_name: this.state.display_name
		})
	}

	handleChangePassword = () => {

	}

	handleChangeEmail = () => {

	}

	render(){
		return(
			<div className="login-wrapper text-center">
				<div className="login-container">
					<h2>Update Profile</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">

							<Label
								disabled
								label="Email"
								value={this.state.email} />

							<Label
								name="display_name"
								label="Display Name"
								onChange={this.handleChange}
								value={this.state.display_name} />

							<hr />
							<button className="btn btn-default btn-lg">Update</button>				
						</div>
					</form>
					{/*<div>
						<button className="btn btn-default" onClick={this.handleChangeEmail}>Change Email</button>	
					</div>
					<div>
						<button className="btn btn-default" onClick={this.handleChangePassword}>Change Password</button>	
					</div>*/}
				</div>
			</div>
		)
	}
}

export default UpdateProfile;