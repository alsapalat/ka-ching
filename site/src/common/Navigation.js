import React, { Component } from 'react';

import { Link } from 'react-router';

class Navigation extends Component {

	handleSearch = () => {
		console.log("Search!");
	}

	handleLogout = () => {
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('profile');
	}

	_renderUser = () => {
		let profile = JSON.parse(sessionStorage.getItem('profile'));

		if(profile)
			return(
				<li className="dropdown">
					<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{profile.email} <span className="caret"></span></a>
					<ul className="dropdown-menu">
						<li><Link to="/profile">Profile</Link></li>
						<li role="separator" className="divider"></li>
						<li><Link to="/" onClick={this.handleLogout}>Logout</Link></li>
					</ul>
				</li>
			)
		return(
			<li><Link to="/auth">Sign-in/Sign-up</Link></li>
		)
	}

	render(){
		return(
			<nav className="navbar navbar-default navbar-fixed-top ">
				<div className="container-fluid">
					<div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <Link className="navbar-brand" to="/">Brand</Link>
				    </div>

				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <form className="navbar-form navbar-left" onSubmit={this.handleSearch}>
				        <div className="form-group">
				          <input type="text" className="form-control" placeholder="Search" />
				        </div>
				        <button type="submit" className="btn btn-default"><i className="fa fa-search" /></button>
				      </form>
				      <ul className="nav navbar-nav navbar-right">
				      	{this._renderUser()}
				      </ul>
				    </div>
			    </div>
			</nav>
		)
	}
}

export default Navigation;