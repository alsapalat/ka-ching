import React, { Component } from 'react';

import history from 'react-router/lib/browserHistory';

class SeederUser extends Component{

	render(){
		return(
			<div>
				User Tab
				<button onClick={()=>{
					history.push('/seed/butler');
				}}>Go to Butler Tab</button>
			</div>
		)
	}
}

export default SeederUser