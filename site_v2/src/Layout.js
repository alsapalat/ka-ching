import React, { Component } from 'react';

import { Navigation } from './common/Navbar';

class Layout extends Component{

	render(){

		let { pathname } = this.props.location;

		return(
			<div>
				<Navigation 
					page={ pathname }/>

				<div 
					className="container animated fadeIn" 
					style={{
					    position: "relative",
					    top: "60px"
					}}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Layout