import React, { Component } from 'react';

import './assets/style.css';

class ListView extends Component{

	state = {
		mode: "list",
		items: []
	}

	componentWillMount = () =>{
		this.setState({
			items: this.props.items
		})
	}

	handleSearch = (keyword) => {
		console.log("Search for '" + keyword + "'");
	}

	handleClearSearch = () => {
		console.log("Clear Search");
	}

	_renderGrid = (item) => {
		return this.props.gridView(item);
	}

	_renderList = (item) => {
		return this.props.listView(item);
	}

	handleLoadMore = (count) => {
		console.log("Load More!", count);
		this.setState({loading: true});
		setTimeout(()=>{
			this.setState({
				items: this.state.items.concat(this.props.items)
			})
			this.setState({loading: false});
		},1000);
	}

	render()
	{
		const { mode, items, loading } = this.state;

		return(
			<div className="teh-list-view-wrapper">
				<div className="teh-list-view-header">
					<SearchBar 
						onSearch={this.handleSearch}
						onClear={this.handleClearSearch}/>

					<ViewToggle 
						mode={mode}
						onToggle={(mode)=>{
							this.setState({mode: mode})
						}}/>
				</div>
				
				<ListViewWrapper 
					mode={mode}
					gridComponent={this._renderGrid}
					listComponent={this._renderList}
					items={items}
					loading={loading}
					onLoadMore={this.handleLoadMore}
					canLoadMore={true}/>

			</div>
		)
	}
}

const ListViewWrapper = ({mode, gridComponent, listComponent, items, onLoadMore, canLoadMore, loading}) => {
	switch(mode)
	{
		case "grid":
			return <GridWrapper 
				items={items}
				renderComponent={gridComponent}
				loading={loading}
				onLoadMore={onLoadMore}
				canLoadMore={canLoadMore}/>
		default:
			return <ListWrapper 
				items={items}
				renderComponent={listComponent}
				loading={loading}
				onLoadMore={onLoadMore}
				canLoadMore={canLoadMore}/>
	}
}

const GridWrapper = ({items, renderComponent, loading, onLoadMore, canLoadMore}) => {

	return (
		<div id="grid-view" className="teh-list-view grid" onScroll={(e)=>{
			let obj = document.getElementById('grid-view');
			if((obj.scrollTop + obj.clientHeight) >= obj.scrollHeight)
				if(!loading)
					if(canLoadMore)
						onLoadMore(items.length);
		}}>
			{items.map((item,i) => {
				return (
					<div className="col-xs-6 col-sm-4 col-md-3 no-margin no-padding" key={i}>
						{renderComponent(item)}
					</div>
				)
			})}
			<footer className="loader col-xs-12">{(loading) ? <i className="fa fa-refresh fa-spin"/> : <span>Load More!</span>}</footer>
		</div>
	)
}

const ListWrapper = ({items, renderComponent, loading, onLoadMore, canLoadMore}) => {

	return (
		<div id="list-view" className="teh-list-view list" onScroll={(e)=>{
			let obj = document.getElementById('list-view');
			if((obj.scrollTop + obj.clientHeight) >= obj.scrollHeight)
				if(!loading)
					if(canLoadMore)
						onLoadMore(items.length);

		}}>
			{items.map((item,i) => {
				return (
					<div className="col-xs-12" key={i}>
						{renderComponent(item)}
					</div>
				)
			})}
			<footer className="loader">{(loading) ? <i className="fa fa-refresh fa-spin"/> : <span>Load More!</span>}</footer>
		</div>
	)
}


const SearchBar = ({value ,onSearch, onClear}) => {

	let keyword = {}

	return(
		<form onSubmit={(e)=>{
			e.preventDefault();
			let val = keyword.value;
			onSearch(val);
		}}className="teh-search-bar">
			<input 
				onChange={()=>{
					if(keyword.value.length < 1)
						onClear();
				}}
				ref={(ref)=>{keyword=ref; return;}}
				placeholder="Search..."
				defaultValue={value}
				className="form-control"/>
		</form>
	)
}

const ViewToggle = ({mode, onToggle}) => {
	return(
		<div className="teh-list-view-mode-toggle">
			<ViewToggleButton 
				onToggle={onToggle}
				mode={mode}
				id="grid"
				icon="fa fa-th" />

			<ViewToggleButton 
				onToggle={onToggle}
				mode={mode}
				id="list"
				icon="fa fa-reorder" />
		</div>
	)
}

const ViewToggleButton = ({mode, id, icon, onToggle}) => {
	return(
		<button 
			disabled={mode===id}
			onClick={()=>{
				onToggle(id);
			}}
			className={`teh-list-view-button ${(mode===id) ? "active" : ""}`}>
			<i className={icon}/>
		</button>
	)
}

export default ListView
