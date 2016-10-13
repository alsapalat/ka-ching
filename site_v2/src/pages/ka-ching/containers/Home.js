import React, { Component } from 'react';

import LoopSelector from '../components/loopselector'

class Home extends Component{

	state = {
		barcode: "",
		code: ""
	}

	componentWillMount(){

	}

	render(){

		const { barcode, code } = this.state;

		return(
			<div>
				<h4>Newly Added</h4>
				<LoopSelector
					/>
				<div className="well" style={{marginTop: "20px", minHeight:"900px"}}>

					<form onSubmit={(e)=>{
						e.preventDefault();
						this.setState({
							code: barcode
						})
					}}>
						<input onChange={(e)=>{
							this.setState({
								barcode: e.target.value
							})
						}} value={barcode}/>
					</form>

					<BarcodeGenerator 
						code={code}/>

				</div>
			</div>
		)
	}
}

const BarcodeGenerator = ({code}) => {
	return(
		<div>
			{code}
		</div>
	)
}

export default Home