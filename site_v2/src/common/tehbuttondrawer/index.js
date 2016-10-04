import React, { Component } from 'react';

class DrawerButton extends Component{

	state = {
		open: false
	}

	render(){

		const { label } = this.props;

		const { open } = this.state;

		return(
			<div 	
				className={`${(open) ? "open" : ""}`}
				style={{
					position: "relative", 
					width: "130px",
					paddingRight: "25px",
					borderRadius: `${(open) ? "4px 4px 0px 0px" : "4px"}`
				}}>

				<button
					id="selectionMenu"
					className="btn btn-primary"
					type="button"
					onClick={()=>{
						this.setState({
							open: !open
						})
					}}>
					{label}
				</button>

				<div
					className="dropdown-menu dropdown-menu-left"
					style={{
						width:"auto",
						left: "-1px",
						right: "-1px",
					    border: "1px solid #ccc",
					    marginTop: "0px",
					    borderRadius: "5px",
					    boxShadow: "none",    
						marginBottom: "30px",
					    padding: "5px",
					    zIndex: "9999"}}
					aria-labelledby="selectionMenu">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default DrawerButton;