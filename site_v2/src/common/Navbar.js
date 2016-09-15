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
				TEST
				<b style={{
				    borderLeft: "solid 3px #069742",
				    color: "#069742",
				    padding: "2px",
				    marginLeft: "2px"
				}}>PROJECT</b></Link>
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
							Menu 1 <span className="caret"/></Link>
						<ul className="dropdown-menu">							
							<NavItem 
								page={ page }
								to='/item1' 
								label='Item 1'
								/>
							<NavItem 
								page={ page }
								to='/item2' 
								label='Item 2'
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