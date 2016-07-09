import React, { Component } from 'react'
import { Link } from 'react-router'

const Navbar = ({page, user}) =>{

	const getNavItems = (user) =>{
		if(user.email != ''){
			return(
				<ul className="nav navbar-nav">
					<li><Link to="/summary">Summary</Link></li>
					<li className="dropdown">
						<a 
							href="#" 
							className="dropdown-toggle"
							data-toggle="dropdown">
							Manage <span className="caret"/></a>
						<ul className="dropdown-menu">
							<li><Link to="/add"><i className="fa fa-plus"/> Add</Link></li>
							<li><Link to="/view"><i className="fa fa-th-list" /> View</Link></li>
						</ul>
					</li>
					<li className="dropdown">
						<a 
							href="#" 
							className="dropdown-toggle"
							data-toggle="dropdown">
							Account({user.name}) <span className="caret"/></a>
						<ul className="dropdown-menu">
							<li><Link to="/settings"><i className="fa fa-wrench" /> Settings</Link></li>
							<li><Link to="/logout"><i className="fa fa-sign-out"/> Logout</Link></li>
						</ul>
					</li>
				</ul>
			)
		}

		return(
			<ul className="nav navbar-nav">
				<li><Link to="/register">Register</Link></li>
			</ul>
		)
	}

	return(
		<nav className="navbar navbar-inverse">
			<div className="container-fluid">
				<div className="navbar-header">
					<button 
						type="button" 
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-target="#my-nav"
						>
						<span className="sr-only">Toggle Nav</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<Link className="navbar-brand" to="/">
						Project
						<b style={{
						    borderLeft: "solid 3px #069742",
						    padding: "2px",
						    marginLeft: "2px"
						}}>Name</b></Link>
				</div>

				<div
					id="my-nav"
					className="collapse navbar-collapse">
					{getNavItems(user)}
				</div>
			</div>
		</nav>
	)
}

export default Navbar