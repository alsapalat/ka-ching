import React, { Component } from 'react';

import "./style.css"

class LoopSelector extends Component{

	state = {
		position: 0,
		mouse_down: false
	}

	componentDidMount(){
		this.wrapper = document.getElementById(this.props.name);

	}

	handleScroll = (e) => {

		console.log();
	}

	render(){

		//const { position } = this.state;
		const { name } = this.props;
		//const item_width = 100;

		//const count = 3;

		console.log("render");

		return(
			<div name={name} className="loop-box-wrapper" onScroll={this.handleScroll}>
				<div className="loop-box-controls left">
					<button><i className="fa fa-caret-left"/></button>
				</div>
				<div className="loop-box-controls right">
					<button><i className="fa fa-caret-right"/></button>
				</div>
				<div 
					className="loop-box"
					onMouseDown={()=>{
						this.setState({mouse_down: true})
					}}
					onMouseUp={()=>{
						this.setState({mouse_down: false})
					}}
					onMouseMove={(e)=>{
						if(this.state.mouse_down){
							const x = e.clientX;
							const y = e.clientY;
							console.log("Move ", x,y)
						}
					}}>
					<div className="loop-box-item">
						<h4>1</h4>
					</div>
					<div className="loop-box-item">
						<h4>2</h4>
					</div>
					<div className="loop-box-item">
						<h4>3</h4>
					</div>
					<div className="loop-box-item">
						<h4>4</h4>
					</div>
				</div>
			</div>
		)
	}

	_render = (index) => {
		const items = ["1","2","3"];

		return(
			<div>
				<h4>{items[index]}</h4>
			</div>
		)
	}
}

export default LoopSelector