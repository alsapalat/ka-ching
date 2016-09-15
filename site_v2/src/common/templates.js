import React, { Component } from 'react';

import ListView from './tehlistView';

class TemplateForm extends Component{


	_renderGrid = (item) => {
		return(
			<div className="my-grid-item">
				<div className="text-center">
					<h4>{item.name}</h4>
					<h6>{item.sub}</h6>
				</div>
			</div>
		)
	}

	_renderList = (item) => {
		return(
			<div className="my-list-item">
				<h4>{item.name}</h4>
				<h6>{item.sub}</h6>
			</div>
		)
	}

	render()
	{
		const items = [
			{
				name: "Item 1",
				sub: "Sub Item 1"
			},{
				name: "Item 2",
				sub: "Sub Item 2"
			},{
				name: "Item 3",
				sub: "Sub Item 3"
			},{
				name: "Item 4",
				sub: "Sub Item 4"
			},{
				name: "Item 5",
				sub: "Sub Item 5"
			},{
				name: "Item 6",
				sub: "Sub Item 6"
			}
		];

		return(
			<div className="container">
				<div>
					<ListView 
						items={items}
						gridView={this._renderGrid}
						listView={this._renderList}/>
				</div>

				<Separator/>

			</div>
		)
	}
}


const Separator = () => {
	return(
		<div className="row">
			<span style={{
			    display: "block",
			    height: "2px",
			    background: "#333",
			    margin: "10px 0px"}}/>
		</div>
	)
}

export default TemplateForm