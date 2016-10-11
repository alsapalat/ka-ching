import React, { Component } from 'react';

class Home extends Component{

	render(){
		return(
			<div>
				<div>Nav Here</div>
				<div className="container animated fadeIn">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Home