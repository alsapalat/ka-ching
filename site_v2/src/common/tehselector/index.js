import React, { Component } from 'react';

import './assets/css/style.css';

export default class TehSelector extends Component{

	state = {filtered: [],
		items: [],
		
		selected: [],
		selected_item: {}
	}

	componentWillMount(){
		let items = this.props.data;

		this.setState({
			items: items,
			filtered: items
		})
	}

	handleOnSelect = (data) =>{


		let { selected } = this.state;

		if(!this.inList(selected, 'id', data.id))	{
			selected.push({
				id: data.id
			})

			if(this.props.onSelect)
				this.props.onSelect(selected);	

			return this.setState(selected);
		}

		selected = selected.filter((item, i) => {
			if(item.id !== data.id)
				return item;
			return null;
		});

		if(this.props.onSelect)
			this.props.onSelect(selected);	

		return this.setState({selected: selected});
	}

	handleOnSearch = (data) =>{
		this.setState({
			filtered : data.items
		})
	}

	handleOnSelectAll = () =>{
		this.setState({
			selected: this.state.items.map((item)=>{
				return {id:item.id}
			})
		})
	} 

	handleOnSelectNone = () =>{
		this.setState({
			selected: []
		})
	} 

	handleOnSelectInvert = () =>{
		this.setState({
			selected: this.state.items.filter((item)=>{
				if(!this.inList(this.state.selected, 'id', item.id))
					return item.id;
				return null;
			})
		})
	} 

	inList(items, objectkey, search){
		let inList = false;

		items.map((item, i) => {
			if(item[objectkey] === search)
				inList = true;
			return null;
		})

		return inList;
	}

	render(){

		let { items, filtered, selected } = this.state;

		return(
			<div className="teh selector-wrapper">
				
				<div className="teh header">
					<div style={{
						marginRight: "33px"
					}}>
						<SearchBar 
							onSearch={ this.handleOnSearch }
							items={ items }
							searchKey='label'
							/>	
					</div>
					<div style={{
						position: "absolute",
						top: "1px",
						right: "1px",
					}} className="dropdown">
						<button 
							type="button" 
							style={{
								height: "34px",
								width: "34px",
							    border: "1px solid #ccc",
							    color: "#a9a9a9",
								background: "#fff"
							}} 
							id="selectionMenu" 
							data-toggle="dropdown" 
							aria-haspopup="true" 
							aria-expanded="true">
							<i className="fa fa-ellipsis-v" />
						</button>
						<ul className="dropdown-menu dropdown-menu-right" aria-labelledby="selectionMenu">
							<li><a onClick={this.handleOnSelectAll}>Select All</a></li>
							<li><a onClick={this.handleOnSelectNone}>Select None</a></li>
							<li><a onClick={this.handleOnSelectInvert}>Select Invert</a></li>
						</ul>
					</div>
				</div>

				<div className="teh body">
					{this.displayItems(filtered)}
				</div>

				<div className="teh footer">
					{`${filtered.length} of ${items.length} items(${selected.length} selected)`}
				</div>
			</div>
		)
	}

	displayItems = (items) =>{
		if(items.length === 0){
			return(
				<div className={`teh selector-item stripped`}>
					<div className="content placeholder">
						Nothing Found...
					</div>
				</div>
			)
		}
		return items.map((item, i) =>{
			return(
				<div 
					key={i}
					className={`teh selector-item stripped ${(this.inList(this.state.selected, 'id', item.id)) ? 'selected' : ''}`}
					onClick={()=> this.handleOnSelect(item)}>
					<div className="content">
						{item.label}
					</div>
				</div>
			)
		});
	}
}

class SearchBar extends Component{

	state = {
		search: '',
		items: []
	}

	componentWillMount(){
		this.setState({items: this.props.items})
	} 

	handleOnChange = (e) =>{
		const search = e.target.value

		let { items, searchKey } = this.props;
		
		let filtered = items.filter((item,i) => {
			if(item[searchKey].toLowerCase().search(search.toLowerCase()) !== -1)
				return item;
			return null;
		});

		this.setState({
			search: search,
			items: filtered
		})
		this.props.onSearch({
			search: search,
			items: filtered
		});
	}

	render(){
		return(
			<div className="teh search-bar">
				<input
					name="search"
					onChange={ this.handleOnChange }
					value={ this.state.search } 
					placeholder="Search..."/>
				<i className="fa fa-search" />
			</div>
		)
	}
}

