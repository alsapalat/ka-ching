import React, { Component } from 'react'

class FinanceRecordCategoryItem extends Component{

	state = {
		option: false,
		width: 0
	}

	componentWillMount(){
		this.setState({width: window.innerWidth});

		window.addEventListener('resize', this.handleChangeWindowSize);
		this.canResize = true;
	}

	handleChangeWindowSize = () =>{
		if(this.canResize){
			this.canResize = false;
			setTimeout(()=>{
				this.canResize = true;
				this.setState({width: window.innerWidth})
			},500)
		}

	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.handleChangeWindowSize);
	}

	showOptions = () =>{
		if(this.state.width > 480)
			return true;
		if(this.state.option)
			return true;
		return false;
	}

	render(){
		const { handleRemove, handleEdit, id, data, className } = this.props;

		return(
			<div 
				className={`btn-list ${className}`}
				style = {{ position: "relative" }}>

				<button
					onClick={()=>{
						handleRemove(id);
					}}
					className="btn btn-danger btn-list-remove"
					>
					<i className="fa fa-trash" />
				</button>

				<button
					onClick={()=>{
						handleEdit(id, data);
					}}
					className="btn btn-success btn-list-edit"
					>
					<i className="fa fa-edit" />
				</button>

				<div 
					className="btn-list-item"
					style = {{
						marginRight: (this.showOptions()) ? 100 : 0,						
    					overflow: "hidden"
					}}
					onClick={()=>{
						this.setState({option: (this.state.option) ? false : true })					
					}}>
						<span 
							style={{
								display: "block",
							    textOverflow: "ellipsis",
							    overflow: "hidden",
							    paddingLeft: "20px",
							    height: "20px",
							    width: "100%"
							}}>
							{data.name} - <small>{data.note}</small></span>
						<span
							style={{
							    float: "right",
							    paddingRight: "20px",
								width: "100%",
								textAlign:"right"}}>
		    				{data.price}</span>
				</div>

			</div>
		)
	}
}

export default FinanceRecordCategoryItem