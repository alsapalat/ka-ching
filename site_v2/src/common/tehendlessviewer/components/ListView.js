import React, { Component, PropTypes } from 'react';

class ListView extends Component{

	state = {
		scrollPos: 0,
		currentPos: 0,
		canLoadMore: true,
		buffer: 6
	}

	componentDidMount(){
		let obj = document.getElementById('teh-list-view');
		let currentPos = this.props.startPos || 0;
		obj.scrollTop = currentPos * this.props.rowHeight;
	}
	
	shouldComponentUpdate(props,state){
		return this.tryUpdate([
			[(state.currentPos !== this.state.currentPos), this.handleChangeRow],
			[(props.itemCount !== this.props.itemCount)],
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
			this.props.onChangeRow(this.state.currentPos);	
		},500)
		
	}

	handleOnScroll = () => {
		let obj = document.getElementById('teh-list-view');

		const { itemCount, onLoadMore, loading, rowHeight } = this.props;
		const { canLoadMore } = this.state;

		this.setState({
			scrollPos: obj.scrollTop,
			currentPos: Math.floor(obj.scrollTop / rowHeight)
		});

		if((obj.scrollTop + obj.clientHeight) >= obj.scrollHeight)
			if(!loading)
				if(canLoadMore)
					onLoadMore(itemCount);
	}

	render(){

		const { currentPos, buffer } = this.state;

		const { itemCount, rowHeight, loading, onLoadMore } = this.props;

		const temp_top = itemCount * rowHeight;

		const footer_top = (temp_top < 480) ? 480 : temp_top;
	
		return(
			<div id="teh-list-view" className="teh-list-view" onScroll={this.handleOnScroll}>
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
		const { itemCount, rowHeight, renderComponent } = this.props;

		let start = (row < 0) ? 0 : row;
		let temp_end = buffer + start;
		let end = (temp_end > itemCount) ? itemCount : temp_end;

		let temp = [];

		for(let i = start; i < end; i++){
			temp.push(i);
		}

		return temp.map((item) => {
			return(
				<ListViewItem
					key={item}
					row={item}
					height={rowHeight}
					render={renderComponent}/>
			)
		})
	}
}

ListView.propTypes = {
	renderComponent: PropTypes.func.isRequired,
}

const ListViewItem = ({render, row, height}) => {

	const top = (row * height);

	return(
		<div
			className="item"
			style={{
				position: "absolute",
				top: `${top}px`,
				height: `${height}px`
			}}>
			{render(row)}
		</div>
	)
}

export default ListView