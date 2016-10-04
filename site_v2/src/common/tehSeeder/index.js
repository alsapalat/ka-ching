import React, { Component } from 'react';

class Seeder extends Component{

	state = {
		endpoint: "http://localhost:8080/api/users",
		key_fields: [],
		json: `[
{
"username": "ALEE"
},{
"username": "KEVIN"
},{
"username": "ARGEL"
}
]`
	}

	handleAddKeyField = (data) => {
		const { key_fields } = this.state;
		let obj = key_fields;
		obj.push(data);
		this.setState({
			key_fields: obj
		})
	}

	handleRemoveKeyField = (key) => {
		const { key_fields } = this.state;
		this.setState({
			key_fields: key_fields.filter((data) => {
				return (data.field !== key)
			})
		})
	}

	handleSeed = (data) => {
		const { endpoint } = data;
		const { json } = this.state;

		if(!isJson(json))
			return console.log("JSON NOT VALID!!");

		const my_json = JSON.parse(json);

		let response = [];

		my_json.map((data)=>{
			let format_data = data
			response.push(postJSON(endpoint, format_data));
			return null;
		})

		console.log("DONE...", response);
		
	}

	render(){

		const { json, endpoint } = this.state

		return(
			<div>
				<h1>SEEDER</h1>
				<div className="well">
					<h4>Json Source</h4>
					<textarea 
						value={json}
						onChange={(e)=>{
							this.setState({
								json: e.target.value
							})
						}}
						style={{width: "100%", minHeight:"240px"}}
						/>
				</div>

				<div className="well clearfix">
					<SeedData 
						value={endpoint}
						onSeed={this.handleSeed}/>
				</div>

				<div className="well clearfix">
					<AddKeyField 
						onAdd={this.handleAddKeyField}/>
				</div>

					<div className="well clearfix">
						{this._renderKeyFields()}
					</div>
			</div>
		)
	}

	_renderKeyFields = () => {
		const { key_fields } = this.state
		return key_fields.map((data, i) => {
			return(
				<KeyField 
					key={i}
					field={data.field}
					value={data.value}
					onRemove={this.handleRemoveKeyField}
					/>
			)
		})
	}
}

function postJSON(yourUrl, obj){

	var Httpreq = new XMLHttpRequest(); // a new request
	Httpreq.open("POST",`${yourUrl}`,false);
	Httpreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// eslint-disable-next-line
	Httpreq.send($.param(obj));

	return JSON.parse(Httpreq.responseText);         
}

function isJson(item){
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === "object" && item !== null) {
        return true;
    }

    return false;
}

const SeedData = ({onSeed, value}) => {
	let endpoint = {}
	return(
		<div className="input-group">
			<input defaultValue={value} ref={(n) => {endpoint=n; return}} className="form-control" placeholder="http://endpoint..."/>
			<span className="input-group-btn">
				<button onClick={()=>{
					onSeed({
						endpoint: endpoint.value
					})
				}}className="btn">SEED DATA!!
				</button>
			</span>
		</div>
	)
}

const KeyField = ({field,value,onRemove}) => {
	return(
		<div>
			<div className="col-xs-12">
			<span className="col-xs-4">{field}</span>
			<span className="col-xs-4">{value}</span>
			<button className="col-xs-2 btn" onClick={()=>{
				onRemove(field);
			}}>Remove</button>
		</div>
		</div>
	)
}

const AddKeyField = ({onAdd}) => {
	let field = {};
	let value = {};
	return(
		<div className="col-xs-12">
			<span className="col-xs-4"><input ref={(n)=>{field = n;}} placeholder="field"className="form-control"/></span>
			<span className="col-xs-4"><input ref={(n)=>{value = n;}} placeholder="value"className="form-control"/></span>
			<button className="col-xs-2 btn" onClick={()=>{
				onAdd({
					field: field.value,
					value: value.value
				});
			}}>Add New Field</button>
		</div>
	)
}

export default Seeder