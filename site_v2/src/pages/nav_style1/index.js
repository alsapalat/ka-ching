import React, { Component } from 'react';
import { Link } from 'react-router'

import './assets/style.css';

class NavStyle extends Component{

	state = {
		bignav: true
	}

	shouldComponentUpdate(prev_prop, prev_state){
		if(prev_state.bignav === this.state.bignav)
			return false;
		return true;
	}

	handleOnScroll = () => {
		let obj = document.getElementById('main');
		return this.setState({bignav: (obj.scrollTop < 200)})
	}

	render(){

		const { bignav } = this.state

		console.log(bignav)

		return(
			<div id="main" onScroll={this.handleOnScroll}>

				<div className={`navbar nav-custom ${(bignav) ? "dark nav-lg" : "light"} navbar-fixed-top`}>
					<div className="container">
						<div className="navbar-header">
							<Link className="navbar-brand" to="/">
								Nav Example
							</Link>
						</div>
					</div>
				</div>

				<div className="container" style={{marginTop: "200px"}}>
					<div className="well" style={{height:"300px"}}></div>
					<div className="well" style={{height:"300px"}}></div>
					<div className="well" style={{height:"300px"}}></div>
					<div className="well" style={{height:"300px"}}></div>
					<div className="well" style={{height:"300px"}}></div>
				</div>
			</div>
		)
	}
}

export default NavStyle