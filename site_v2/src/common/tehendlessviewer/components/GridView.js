import React, { Component, PropTypes } from 'react';

class GridView extends Component{

	state = {
		scrollPos: 0,
		currentPos: 0,
		canLoadMore: true,
		buffer: 3,
		gridSize: 3
	}

	componentDidMount(){
		let obj = document.getElementById('teh-grid-view');
		let width = obj.clientWidth;
		this.handleSetGridSize(width);

		let currentPos = this.props.startPos || 0;
		obj.scrollTop = Math.floor(currentPos/4) * this.props.rowHeight;
	}

	shouldComponentUpdate(props,state){
		return this.tryUpdate([
			[(state.currentPos !== this.state.currentPos), this.handleChangeRow],
			[(props.itemCount !== this.props.itemCount)],
			[(state.gridSize !== this.state.gridSize)],
			[(props.loading !== this.props.loading)]
		]);
	}

	tryUpdate = (bools) => {
		let update = false;
		bools.map((bool) => {
			if(bool[0]){
				if(bool[1])
					bool[1]();
				update = true;
			}
			return null;
		})
		return update;
	}

	handleChangeRow = () => {
		clearTimeout(this.timeChangeRow);
		this.timeChangeRow = setTimeout(()=>{
			this.props.onChangeRow(this.state.currentPos*this.state.gridSize);	
		},500)
	}

	handleSetGridSize = (width) => {
		if(width > 860)
			return this.setState({
				gridSize: 6
			})
		if(width > 440)
			return this.setState({
				gridSize: 4
			})
		if(width > 220)
			return this.setState({
				gridSize: 2
			})
		return this.setState({
				gridSize: 1
			})
	}

	handleOnScroll = () => {
		let obj = document.getElementById('teh-grid-view');

		const { itemsCount, onLoadMore, loading, rowHeight } = this.props;
		const { canLoadMore } = this.state;

		this.setState({
			scrollPos: obj.scrollTop,
			currentPos: Math.floor(obj.scrollTop / rowHeight)
		});

		if((obj.scrollTop + obj.clientHeight) >= obj.scrollHeight)
			if(!loading)
				if(canLoadMore)
					onLoadMore(itemsCount);
	}

	render(){

		const { currentPos, buffer } = this.state;

		const { itemCount, rowHeight, loading, onLoadMore } = this.props;

		const { gridSize } = this.state;

		const temp_top = Math.floor(itemCount/gridSize) * rowHeight;

		const footer_top = (temp_top < 480) ? 480 : temp_top;
	
		return(
			<div className="teh-grid-view"
				id="teh-grid-view"
				onScroll={this.handleOnScroll}>
				{this._renderRows(currentPos, buffer)}
				<footer 
					onClick={()=>{
						onLoadMore(itemCount);
					}}
					style={{position: "absolute", top: `${footer_top}px`}}
					className="loader">{(loading) ? <i className="fa fa-refresh fa-spin"/> : <span>Load More!</span>}</footer>
			</div>
		)
	}

	_renderRows = (row, buffer) => {

		const { itemCount, rowHeight, renderComponent } = this.props

		const { gridSize } = this.state;

		let start = (row < 0) ? 0 : row * gridSize;
		let temp_end = (buffer * gridSize) + start;
		let end = (temp_end > itemCount) ? itemCount : temp_end;

		let temp = [];
		let group = [];

		for(let i = start; i < end; i++){
			group.push(i);
			if((i%gridSize) === gridSize-1){
				temp.push(group);
				group=[];
			}
		}

		return temp.map((items,i) => {
			return(
				<GridViewRow 
					key={i+start}
					row={row+i}
					items={items}
					height={rowHeight}
					render={renderComponent}
					gridSize={gridSize}
					/>
			)
		})
	}
}

GridView.propTypes = {
	renderComponent: PropTypes.func.isRequired,
}

const GridViewRow = ({items, render, row, height, gridSize}) => {

	const top = (row * height);

	return(
		<div
			className="row"
			style={{
				position: "absolute",
				top: `${top}px`,
				height: `${height}px`,
			}}>
			{items.map((item, i) => {
				return(
					<div key={i} style={{width: `${(100/gridSize)}%`}}>
						{render(item)}
					</div>
				)	
			})}
		</div>
	)
}

export default GridView