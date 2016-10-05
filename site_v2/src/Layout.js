import React, { Component } from 'react';

import { Navigation } from './common/Navbar';

import TehChat from './common/tehChat';

class Layout extends Component{

	render(){

		let { pathname } = this.props.location;

		return(
			<div>
				<TehChat 
					firebase={{
						apiKey: 't3ifHgzj3ni3jHQwhwS9jxGzT543Y34MKxQUYw1L',
    					databaseURL: 'https://tehfirebase.firebaseio.com',
					}}
					room={{
						id: "general",
						sender: {
							id: 2,
							name: "Admin"
						},
						label: "General Chat Room"
					}}/>

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