import React, { Component } from 'react';
import { Link } from 'react-router';

import Navigation from './common/Navigation';

//Load Firebase Here...

class App extends Component {

	componentDidMount(){
		// eslint-disable-next-line
		$(window).scroll((event) =>{
		    console.log("SCROLLED!");
		});
	}

	render(){
		return(
			<div ref="root" onScroll={this.handleScroll}>
				<Navigation />
				<Link to="/auth">Login</Link>
				<Link to="/">Home</Link>
				{this.props.children}

				<div className="well" style={{height:"200px", width: "500px", margin: "5px auto"}}>
					Hello World
				</div>
				<div className="well" style={{height:"200px", width: "500px", margin: "5px auto"}} />
				<div className="well" style={{height:"200px", width: "500px", margin: "5px auto"}} />
				<div className="well" style={{height:"200px", width: "500px", margin: "5px auto"}} />
				<div className="well" style={{height:"200px", width: "500px", margin: "5px auto"}} />
				<div className="well" style={{height:"200px", width: "500px", margin: "5px auto"}} />
				<div className="well" style={{height:"200px", width: "500px", margin: "5px auto"}} />
				<div className="well" style={{height:"200px", width: "500px", margin: "5px auto"}} />
				<div className="well" style={{height:"200px", width: "500px", margin: "5px auto"}} />
				<div className="well" style={{height:"200px", width: "500px", margin: "5px auto"}} />

			</div>
		)
	}
}

export default App;