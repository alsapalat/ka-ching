import React, { Component } from 'react';

import history from 'react-router/lib/browserHistory';

class CSVParser extends Component{

	state = {
		forms: [
			"NONSUC-e-Forms-A",
			"NONSUC-e-Forms-B-C",
			"NONSUC-Form-E5-Faculty-Form",
			"NONSUC-PRC-List-of-Graduates",
			"SUC-NF-FORM-A",
			"SUC-NF-FORM-B",
			"SUC-NF-FORM-E1",
			"SUC-NF-FORM-E2",
			"SUC-NF-FORM-GH",
			"SUC-NF-Research-Extension-Forms",
			"SUC-PRC-List-of-Graduates",
		]
	}

	componentWillMount(){
	}

	render(){

		const { forms } = this.state;

		const active = this.props.params.active || "NONSUC-e-Forms-A"

		return(
			<div>
				<ul className="nav nav-tabs">
					{forms.map((form,i) => {
						return(
  							<li key={i} className={`${(active === form) ? "active" : ""}`}>
  								<a onClick={()=>{
  									this.setState({
  										active: form
  									})
  									history.push(`/csv-parser/${form}`)
  								}}>
  									{form}
								</a>
							</li>
						)
					})}
				</ul>
				<div>
					{this.props.children}
				</div>				
			</div>
		)
	}
}

export default CSVParser