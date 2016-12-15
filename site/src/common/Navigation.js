import React, { Component } from 'react';

import { Link } from 'react-router';

class Navigation extends Component {
	render(){
		return(
			<nav className="navbar navbar-default navbar-fixed-top ">
				<div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <Link className="navbar-brand" to="/">Brand</Link>
			    </div>
			</nav>
		)
	}
}

export default Navigation;