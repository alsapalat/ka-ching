import React, { Component, PropTypes } from 'react';

import './assets/style.css';

import Header from './components/Header';
import GridView from './components/GridView';
import ListView from './components/ListView';

class EndlessViewer extends Component{

	state = {
		currentPos: 0
	}

	componentWillMount(){
		let view_type = "list";
		let query = {};

		if(this.props.Query){
			query = this.props.Query;
		}

		this.setState({
			view_type,
			query
		})
	}

	handleLoadMore = () => {
		const { Count } = this.props;
		this.props.onLoadMore(Count);
	}

	handleToggleMode = (mode) => {
		this.setState({
			view_type: mode
		})
	}

	handleChangeRow = (row) => {
		this.setState({
			currentPos: row
		})
		const { onScroll } = this.props;
		if(onScroll)
			onScroll(row)
	}

	handleSearch = (keyword) => {
		const { onSearch } = this.props;
		if(onSearch)
			this.props.onSearch(keyword)
	}

	render()
	{
		const { view_type } = this.state;

		const Count = (this.props.Count < 8) ? 8 : this.props.Count;

		return(
			<div className={`teh-endless-viewer window`}>
				<Header 
					mode={view_type}
					count={this.props.Count}
					onSearch={this.handleSearch}
					onClearSearch={this.handleSearch}
					onToggleMode={this.handleToggleMode}/>
				{this._renderBody(view_type, Count)}
			</div>
		)
	}

	_renderBody = (view_type, count) => {
		switch(view_type)
		{
			case "grid":
				return <GridView 
					startPos={this.state.currentPos}
					loading={this.props.loading} 
					onLoadMore={this.handleLoadMore}
					onChangeRow={this.handleChangeRow}
					itemCount={count} 
					rowHeight={this.props.gridHeight} 
					renderComponent={this.props.GridView} />
			default: 
				return <ListView 
					startPos={this.state.currentPos}
					loading={this.props.loading} 
					onLoadMore={this.props.onLoadMore}
					onChangeRow={this.handleChangeRow}
					itemCount={count} 
					rowHeight={this.props.listHeight} 
					renderComponent={this.props.ListView} />
		}
	}
}

EndlessViewer.propTypes = {
	Count: PropTypes.number.isRequired,
}

export default EndlessViewer
