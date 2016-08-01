import React, { Component } from 'react';
import { Link } from 'react-router';

class SeederLayout extends Component{

	render(){

		let { location } = this.props;
		let pathname = (location.pathname === '/seed') ? '/seed/user' : location.pathname;

		return(
			<div>
				<ul className="nav nav-tabs">					
					<TabItem 
						currentpage={pathname}
						to='/seed/user'
						label='User'
						/>	
					<TabItem 
						currentpage={pathname}
						to='/seed/butler'
						label='Butler'
						/>					
				</ul>
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}	
}

const TabItem = ({currentpage, to, label}) => {
	return(
		<li className={(currentpage === to) ? 'active' : ''}>
			<Link to={to}>
				{label}
			</Link>
		</li>
	)
}

export default SeederLayout