import React, { Component } from 'react';

import { Navigation } from './common/Navbar';

import TehChat from './common/tehChat';

class Layout extends Component{

	render(){

		let { pathname } = this.props.location;

		return(
			<div>
				<TehChat 
					firebase={{
						apiKey: 't3ifHgzj3ni3jHQwhwS9jxGzT543Y34MKxQUYw1L',
    					databaseURL: 'https://tehfirebase.firebaseio.com',
					}}
					room={{
						id: "general",
						sender: {
							id: 2,
							name: "Admin"
						},
						label: "General Chat Room"
					}}/>

				<Navigation 
					page={ pathname }/>

				<div 
					className="container animated fadeIn" 
					style={{
					    position: "relative",
					    top: "60px"
					}}>
					{this.props.children}

					<div className="well clearfix">
						<div className="col-xs-8">
							<CustomInput 
								value="Hello World"
								callBack={(params)=>{
									console.log("UPDATE STATE", params)
								}}/>
						</div>
						<button className="btn btn-default col-xs-4" >TESTING!</button>

						<LoginForm 
							callBack={(params)=>{
								console.log("Login", params);
							}}/>
					</div>
				</div>

			</div>
		)
	}
}

const LoginForm = ({callBack}) => {
	let name = {};
	let password = {};
	return(
		<form onSubmit={(e)=>{
					e.preventDefault()
				callBack({
					name: name.value,
					password: password.value
				})
			}}>
			<input ref={(r) =>{name = r}} type="text"/>
			<input ref={(r) =>{password = r}} type="password"/>
			<button type="submit">Login</button>
		</form>
	)
}

const CustomInput = ({value, callBack}) => {
	let r = {}
	return(
		<input className="form-control" ref={(p)=>{r = p}} defaultValue={value} onBlur={()=>{
			callBack(r.value)
		}}/>
	)
} 

export default Layout