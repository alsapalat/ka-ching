import React, { Component } from 'react';
import { Link } from 'react-router'

import './assets/style.css';

import TehChat from '../../common/tehChat';

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

		return(
			<div id="main" onScroll={this.handleOnScroll}>

				<div className={`navbar nav-custom ${(bignav) ? "dark nav-lg" : "light"} navbar-fixed-top`}>
					<div className="container">
						<div className="navbar-header">
							<Link className="navbar-brand" to="/">
								Navi Example
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

				<TehChat 
					firebase={{
						apiKey: 't3ifHgzj3ni3jHQwhwS9jxGzT543Y34MKxQUYw1L',
    					databaseURL: 'https://tehfirebase.firebaseio.com',
					}}
					room={{
						id: "general",
						sender: {
							id: 1,
							name: "Guest User"
						},
						label: "General Chat Room"
					}}/>
			</div>
		)
	}


}

export default NavStyle

// generateCombinations = (a,b) => {
// 	let temp = ""
// 	for(let i =0; i<a.length;i++){
// 		for(let j =0;j<b.length;j++){
// 			temp+=`${a[i]};${b[j]}\r\n`
// 		}	
// 	}
// 	return temp;
// }