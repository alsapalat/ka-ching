import React from 'react';
import { Link } from 'react-router'

export const Navigation = ({ page }) =>{
	return(
		<nav className="navbar navbar-inverse navbar-fixed-top animated fadeInDown">
			<div className="container">				

				<NavHeader />

				<NavItems 
					page={page}/>

			</div>
		</nav>
	)
}

const NavHeader = () => {
	return(
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
				ADMIN
				<b style={{
				    borderLeft: "solid 3px #f5b700",
				    color: "#f5b700",
				    padding: "2px",
				    marginLeft: "2px"
				}}>PISO</b></Link>
		</div>
	)
}

const NavItems = ({page}) => {
	return(
		<div
			id="my-nav"
			className="collapse navbar-collapse">
				<ul className="nav navbar-nav">
					
					<li className={`${(page.substring(0,5) === '/seed') ? 'active' : ''} dropdown`}>
						<Link 
							to="/seed" 
							className="dropdown-toggle"
							data-toggle="dropdown">
							Seed <span className="caret"/></Link>
						<ul className="dropdown-menu">							
							<NavItem 
								page={ page }
								to='/seed/user' 
								label='User'
								/>
							<NavItem 
								page={ page }
								to='/seed/butler' 
								label='Butler'
								/>
						</ul>
					</li>
				</ul>
		</div>
	)
}

const NavItem = ({page, to, label}) =>{
	return(
		<li className={(page === to) ? 'active' : ''}>
			<Link to={to}>
				{label}
			</Link>
		</li>
	)
}