import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as modalActions from './common/modal/Actions';

import ModalWindow from './common/modal/ModalWindow';

import ModalInput from './common/modal/components/ModalInput';
import FinanceRecordCategoryItemInput from './pages/manage_add/components/FinanceRecordCategoryItemInput';

class ModalCollection extends Component{

	handleChange = (data) =>{
		this.props.modalAct.modalOnChange(data);
	}

	handleClose = () =>{
		this.props.modalAct.modalHide();
	}

	getForm(id){
		const { properties, data } = this.props.modal;
		switch(id)
		{
			case 'input':
				return(
					<ModalInput 
						name= "input"
						handleChange = { this.handleChange } 
						label = {properties.inputLabel || "Input Box"}/>
				)
			case 'financerecordcategoryitem':
				return(
					<FinanceRecordCategoryItemInput	
						handleChange = { this.handleChange }
						label = { properties.inputLabel || "Input Box" }
						data = { data }
						/>
				)
			default:
				return(
					<div>
						<h1>Form Not Found!</h1>
					</div>
				)
		}
	}

	render()
	{
		const { modal } = this.props;		
		const id = modal.id || "notfound";

		return(
			<ModalWindow
				modalData = { modal }
				handleClose = { this.handleClose }>
				{this.getForm(id)}
			</ModalWindow>
		)
	}
}

export default connect(
	state =>{
		const { modal } = state;
		return {
			modal
		}
	},
	dispatch =>{
		return {
			modalAct: bindActionCreators(modalActions, dispatch)
		}
	}
)(ModalCollection)

