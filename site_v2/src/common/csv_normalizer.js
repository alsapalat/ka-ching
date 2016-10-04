import React, { Component } from 'react';

class CSVNormalizer extends Component{

	state = {
		source: "",
		tables: []
	}

	render(){

		const { tables, source } = this.state; 

		return(
			<div>
				<h1>CSV Normalizer</h1>
				<div>
					<textarea value={source} onChange={(e)=>{this.setState({source:e.target.value})}}/>
				</div>
				<div>
					<button onClick={()=>{
						this.setState({tables: tables.concat(tables.length)});
					}}>+</button>

					<button>Generate Tables</button>
				</div>
				<div>
					{tables.map((table,i) => {
						return(
							<TableItem 
								key={i}
								data={table}/>
						)
					})}
				</div>
			</div>
		)
	}
}

class TableItem extends Component{

	state = {
		name: "",
		columns: []
	}

	render(){

		const { columns } = this.state;

		return(
			<div>
				<div>
					<input onChange={(e)=>{
						this.setState({
							name: e.target.value
						})
					}}/>
					<button onClick={()=>{
						this.setState({columns: columns.concat(columns.length)});
					}}>+</button>
				</div>
				<div>
					{columns.map((col,i) => {
						return(
							<ColumnItem
								key={i}
								data={col}/>
						)
					})}
				</div>
			</div>
		)
	}
}

class ColumnItem extends Component{

	state = {
		column: "",
		reference: ""
	}

	render(){

		const { column, reference } = this.state;

		const references = [
			"email", "name", "course"
		];

		return(
			<div>
				<div>
					<input value={column} onChange={(e)=>{
						this.setState({column: e.target.value})
					}}/>
					<select
						value={reference}
						onChange={(e)=>{
							this.setState({reference: e.target.value})
						}}>
						{references.map((ref,i) => {
							return <option value={ref}>{ref}</option>
						})}
					</select>
				</div>
			</div>
		)
	}
}



export default CSVNormalizer