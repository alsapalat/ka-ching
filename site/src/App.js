import React, { Component } from 'react';
import { Link } from 'react-router';

//Load Firebase Here...

class App extends Component {
	render(){
		return(
			<div>
				<Link to="/auth">Login</Link>
				<Link to="/">Home</Link>
				{this.props.children}
			</div>
		)
	}
}

export default App;