import React, { Component } from 'react'
import history from '../../middleware/history'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as modalActions from '../../common/modal/Actions';

import BackButton from '../../common/components/BackButton';
import InputItem from '../../common/components/InputItem';

import FinanceRecordCategoryItem from './components/FinanceRecordCategoryItem';

class AddContainer extends Component{

	state = {
		description: '',
		items: [
			{
				name: "item 1",
				price: 100000,
				note: 'Detail 1',
			},{
				name: "item 2",
				price: 10,
				note: 'Detail 2',
			},
			]
			
	}

	handleChange = (e) =>{
		let n = {}
		n[e.target.name] = e.target.value;
		this.setState(n);
	}

	handleGetType = (data) =>{
		this.setState({
			type: data,
			page: 'category'
		})
		history.push(`/add/${data}?page=category`);
	}

	handleGetCategory = (data) =>{
		this.setState({
			category: data,
			page: 'details'
		})
		history.push(`/add/${this.state.type}?category=${data}&page=details`);
	}

	handleAddCategory = (data) =>{
		this.props.modalAct.modalShow({
			show: true,
			id: 'input',
			data: {},
			save: this.saveCategory,
			properties: { 
				saveLabel: "Add Category",
				inputLabel: "New category name..."
			}
		})
	}

	handleAddItem = (data) =>{
		this.props.modalAct.modalShow({
			show: true,
			id: 'financerecordcategoryitem',
			data: {
				name: '',
				price: '',
				note: ''
			},
			save: this.addItem,
			properties: { 
				saveLabel: "Add Item",
				inputLabel: "Add Item..."
			}
		})
	}

	addItem = (data) =>{
		const { modalAct } = this.props;
		
		modalAct.modalOnWaiting(true);

		setTimeout(()=>{
			modalAct.modalOnWaiting(false);
			modalAct.modalHide();
			console.log(data , " has been added to the items");
			this.setState({
				items: [
					...this.state.items, 
					data
				]
			})
		},2000)
	}

	editItem = (data) =>{
		const { modalAct } = this.props;

		modalAct.modalOnWaiting(true);

		setTimeout(()=>{
			modalAct.modalOnWaiting(false);
			modalAct.modalHide();

			let newData = this.state.items.map((item,index)=>{
				if(index != data.id)
					return item;
				return { 
					name: data.name,
					price: data.price,
					note: data.note
				};
			})
			
			console.log("item updated...");			
			this.setState({items: newData});
		},2000)
	} 

	saveCategory = (data) =>{
		const { modalAct } = this.props;
		
		modalAct.modalOnWaiting(true);

		setTimeout(()=>{
			modalAct.modalOnWaiting(false);
			modalAct.modalHide();
			console.log(data.input + " has been added to the categories");
		},2000)
	}

	handleFinalize = (data) =>{
		const { type, category, items } = this.state;
		this.setState({
			page: 'summary'
		})
		history.push(`/add/${type}?category=${category}&page=summary`);
		//console.log("View Summary!", data);
	}

	goToType = () =>{
		this.setState({
			page: 'type'
		})
		history.push(`/add?page=type`);
	}

	goToCategory = () =>{
		this.setState({
			page: 'category'
		})
		history.push(`/add/${this.state.type}?page=category`);
	}

	goToDetail = () =>{
		this.setState({
			page: 'details'
		})
		const { type, category } = this.state;
		history.push(`/add/${type}?category=${category}&page=details`)
	}

	componentWillMount(){
		const { type } = this.props.params;
		const { category, page } = this.props.location.query;
		this.setState({
			type: type,
			category: category,
			page: page || 'type'
		});
	}

	render()
	{

		const { type, category, page,description } = this.state;

		let total = 0;

		switch(page){
			case 'category':
				return(					
					<div>
						<h4><a onClick={this.goToType}>{type}</a> > Select category</h4>
						<div>
							<InputItem
								handleClick={this.handleAddCategory}
								className = "btn-type-add"
								data = "addcategory"
								label="Add Category"/>
							<InputItem
								handleClick={this.handleGetCategory}
								data = "Transportation"
								label="Transportation"/>
							<InputItem
								handleClick={this.handleGetCategory}
								data = "Food"
								label="Food"/>
						</div>
					</div>	
				)
			case 'details':
				return(
					<div>
						<h4><a onClick={this.goToType}>{type}</a> > <a onClick={this.goToCategory}>{category}</a> > Details</h4>

						<div>
							<input 
								autoFocus				
								name = "description"
								className = "form-control"
								onChange = { this.handleChange }
								placeholder = "Description..."
								value = { this.state.description }/>
						</div>

						<div>
							<InputItem
								handleClick={this.handleAddItem}
								className = "btn-type-add"
								data = "additem"
								label="Add Item"/>
						</div>

						<div>
							{this.state.items.map((item,index)=>{
								return(
									<FinanceRecordCategoryItem
										key = {index}
										className = "btn-type-default"
										handleRemove = { (id) =>{
											console.log("Remove Item ", id);
										}}
										handleEdit = { (id) =>{
											this.props.modalAct.modalShow({
												show: true,
												id: 'financerecordcategoryitem',
												data: {
													id: id,
													name: item.name,
													price: item.price,
													note: item.note
												},
												save: this.editItem,
												properties: { 
													saveLabel: "Edit Item",
													inputLabel: "Edit Item..."
												}
											})
										}}
										id = {index}
										data = {{
											name: item.name,
											price: item.price,
											note: item.note
										}}
										/>							
								)
							})}
						</div>

						<div
							style={{								
							    textAlign: "right",
							    marginRight: "10px"
							}}>
							<label>Total Price: <span>{total}</span></label>
						</div>

						<div 
							style={{								
							    marginTop: "-5px",
							    paddingTop: "2px",
							    borderTop: "solid #ccc 2px"
							}}>
							<InputItem
								handleClick={this.handleFinalize}
								className = "btn-type-done"
								data = {this.state}
								label = "Proceed to Summary" />
						</div>
					</div>
				)
			case 'summary':
				const items = this.state.items;

				return (
					<div>
						<h4>
							<a onClick={this.goToType}>{type}</a> > 
							<a onClick={this.goToCategory}>{category}</a> > 
							<a onClick={this.goToDetail}>Details</a> > Summary
						</h4>

						<div 
							className="my-well"
							style={{
    							fontSize: "12px",
    							paddingTop: "10px"
							}}>

							<div>
								<p style={{									
								    margin: "0px",
								    padding: "0px"
								}}><label>Type</label>: <span>{type}</span></p>
								<p style={{							
								    margin: "0px",
								    padding: "0px"
								}}><label>Category</label>: <span>{category}</span></p>
								<p style={{							
								    margin: "0px",
								    padding: "0px"
								}}><label>Description</label>: <span>{description}</span></p>
							</div>

							<table className="table table-condensed table-striped">
								<thead>
									<tr>
										<td><label>Item</label></td>
										<td style={{width: "80px"}}><label>Price</label></td>
									</tr>
								</thead>
								<tbody>
									{items.map((item, index)=>{
										total = (parseInt(total) + parseInt(item.price));
										return(
											<tr key = {index}>
												<td>{`${item.name} - ${item.note}`}</td>
												<td>{item.price}</td>
											</tr>											
										)
									})}
								</tbody>
								<tfoot>
									<tr>
										<td><label>Total</label></td>
										<td><label>{total}</label></td>
									</tr>
								</tfoot>
							</table>
						</div>

						<InputItem
							handleClick={()=>{
								console.log("Save", this.state);
							}}
							className = "btn-type-done"
							data = {this.state}
							label = "Save Record" />
					</div>
				)
			default: 
				return(					
					<div>
						<h4>Select type ></h4>
						<div>
							<InputItem
								handleClick={this.handleGetType}
								data = "Expense"
								label="Expense"/>
							<InputItem
								handleClick={this.handleGetType}
								data = "Income"
								label="Income"/>
						</div>
					</div>
				)
		}
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
		return{
			modalAct: bindActionCreators(modalActions, dispatch)
		}
	}
)(AddContainer)

