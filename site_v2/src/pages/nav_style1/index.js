import React, { Component } from 'react';
import { Link } from 'react-router'

import './assets/style.css';

import TehChat from '../../common/tehChat';
import AddressPicker from '../../common/tehAddressPicker';

class NavStyle extends Component{

	state = {
		bignav: true,
		address1: "",
		address2: ""
	}

	shouldComponentUpdate(prev_prop, prev_state){
		if(prev_state.bignav !== this.state.bignav)
			return false;
		return true;
	}

	handleOnScroll = () => {
		let obj = document.getElementById('main');
		return this.setState({bignav: (obj.scrollTop < 200)})
	}

	parseAddress = (a) => {
		return `Country Code: ${a.country}, Province ID: ${a.province}, City ID: ${a.city}, Street: ${a.street}`
	}

	render(){

		const { bignav, address1, address2 } = this.state;

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
					<div className="well" style={{height:"300px"}}>
						<h1>Address Picker Instance 1</h1>

						<div className="col-md-3"> 
							<AddressPicker 
								onChange={(data)=>{
									this.setState({
										address1: this.parseAddress(data)
									})
								}}/>
						</div>

						<div>{address1}</div>
					</div>
					<div className="well" style={{height:"300px"}}>
						<h1>Address Picker Instance 2</h1>

						<div className="col-md-3"> 
							<AddressPicker 
								onChange={(data)=>{
									this.setState({
										address2: this.parseAddress(data)
									})
								}}/>
						</div>
							
						<div>{address2}</div>
					</div>
					<TestInputCommon/>
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

class TestInputCommon extends Component{
	state = {
		a: "",
		b: "",
		c: "",
		d: "",
		e: "",
		f: "",
		g: ""
	}
	render(){
		const {
			a,
			b,
			c,
			d,
			e,
			f,
			g
		} = this.state;

		const input_common = {
			className: "form-control",
			onChange: (e)=>{
				let n = {};
				n[e.target.name] = e.target.value;
				this.setState(n);
			}
		}
		
		return(
			<div>
				<div className="well" style={{height:"300px"}}>
					<div>a:{a}</div>
					<div>b:{b}</div>
					<div>c:{c}</div>
					<div>d:{d}</div>
					<div>e:{e}</div>
					<div>f:{f}</div>
					<div>g:{g}</div>
				</div>
				<div className="well" style={{height:"300px"}}>

					<input {...input_common} placeholder="A" name="a" value={a}/>
					<input {...input_common} placeholder="B" name="b" value={b}/>
					<input {...input_common} placeholder="C" name="c" value={c}/>
					<input {...input_common} placeholder="D" name="d" value={d}/>
					<input {...input_common} placeholder="E" name="e" value={e}/>
					<input {...input_common} placeholder="F" name="f" value={f}/>
					<input {...input_common} placeholder="G" name="g" value={g}/>
				</div>
			</div>
		)
	}
}

// generateCombinations = (a,b) => {
// 	let temp = ""
// 	for(let i =0; i<a.length;i++){
// 		for(let j =0;j<b.length;j++){
// 			temp+=`${a[i]};${b[j]}\r\n`
// 		}	
// 	}
// 	return temp;
// }