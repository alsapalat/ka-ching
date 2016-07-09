import React, { Component } from 'react'

class ModalWindow extends Component{

	render()
	{

		const { modalData } = this.props;

		const properties = modalData.properties || {}

		const { show, data, loading } = modalData;

		const saveLabel = properties.saveLabel || "Save";

		return(
			<div className={`my-modal ${(show) ? "" : "hide"}`}>
				<div className="my-modal-window animated zoomIn">
					<div className="my-modal-header">
        				<button 
        					className="close"
        					onClick={() =>{
        						this.props.handleClose();
        					}}>&times;</button>
					</div>
					<div 
						className="my-modal-content"
						style={{marginTop: "25px"}}>
						<form onSubmit={(e) =>{
							e.preventDefault();
							modalData.save(data);
						}}>
							{this.props.children}
						</form>
					</div>
					<div 
						className="my-modal-footer" 
						style={{marginTop: "10px"}}>
						<button 
							className="btn btn-default"
							onClick={() =>{								
								modalData.save(data);
							}}>{(loading) ? <i className="fa fa-spin fa-spinner"/> : saveLabel}</button>
					</div>
				</div>
				<div 
					className="my-modal-bg animated fadeIn" 
					onClick = {() =>{
						this.props.handleClose();
					}}/>
			</div>
		)
	}
}

export default ModalWindow

