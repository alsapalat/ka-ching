import React, { Component } from 'react';

import EndlessViewer from './tehendlessviewer/';

import DrawerButton from './tehbuttondrawer/';

class TemplateForm extends Component{

	state = {
		items: [],
		loading: false
	}

	componentWillMount(){

		const items = [
			{
				name: "Item 1",
				sub: "Sub Item 1",
				img: "https://imgflip.com/s/meme/Creepy-Condescending-Wonka.jpg"
			},{
				name: "Item 2",
				sub: "Sub Item 2",
				img: "https://i.imgflip.com/59qi.jpg"
			},{
				name: "Item 3",
				sub: "Sub Item 3",
				img: "http://i.imgur.com/ILMuAP2.jpg"
			},{
				name: "Item 4",
				sub: "Sub Item 4",
				img: "http://www.relatably.com/m/img/blank-memes-templates/am-i-the-only-one-meme.jpg"
			},{
				name: "Item 5",
				sub: "Sub Item 5",
				img: "http://www.relatably.com/m/img/funny-blank-meme-pictures/b1f3fd3f5947020d80fd88a872aee9eb.jpg"
			},{
				name: "Item 6",
				sub: "Sub Item 6",
				img: "http://lh6.ggpht.com/5wcSHOVVx7BjG9xk2UyTBpiSAfeB5IcSf5FD1RFwXrsXGAKkiBQySn_ThQt8Nnr2RVVLzWgXzuJ90n-_hzj_AYHN=s200"
			},{
				name: "Item 7",
				sub: "Sub Item 7",
				img: "http://www.memecreator.org/static/images/templates/794924.jpg"
			},{
				name: "Item 8",
				sub: "Sub Item 8",
				img: "http://www.relatably.com/m/img/blank-memes-templates/am-i-the-only-one-meme.jpg"
			},{
				name: "Item 9",
				sub: "Sub Item 9",
				img: "http://www.relatably.com/m/img/funny-blank-meme-pictures/b1f3fd3f5947020d80fd88a872aee9eb.jpg"
			},{
				name: "Item 10",
				sub: "Sub Item 10",
				img: "http://lh6.ggpht.com/5wcSHOVVx7BjG9xk2UyTBpiSAfeB5IcSf5FD1RFwXrsXGAKkiBQySn_ThQt8Nnr2RVVLzWgXzuJ90n-_hzj_AYHN=s200"
			},{
				name: "Item 11",
				sub: "Sub Item 11",
				img: "http://www.memecreator.org/static/images/templates/794924.jpg"
			}
		];

		setTimeout(()=>{
			this.setState({
				items: items//this.getJSON('http://localhost:8090/api/v1/report/downloadable/site-log?start_date=&end_date=&action_type=&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDkwXC9hcGlcL3YxXC9jb3JlXC9hdXRoIiwiaWF0IjoxNDczOTI2Mjg5LCJleHAiOjE0NzcwODIyODksIm5iZiI6MTQ3MzkyNjI4OSwianRpIjoiNTQ3YWM3ZTU2ZjM5NWQ1YmNmMjNkZmY0Njk5MDNhYTYifQ.o0kc2qHVQ8MEdtkcYL9KxYm4HNQHyGWANBlC-z_cwUg').data
			})
		},2000)
		
	}

	_renderGrid = (rowIndex) => {
		const { items }  = this.state

		if(items[rowIndex])
			return(
				<div className="my-grid-item">
					<div>
						<h4>{rowIndex}</h4>
					</div>
					<div style={{textAlign: "center"}}>
						<div style={{height: "100px", width: "100px", border: "1px solid #e2e2e2", overflow: "hidden", margin: "0 auto"}}>
							<img style={{height: "100%", width: "auto"}} src={items[rowIndex].img}/>
						</div>
					</div>
					<div className="text-center">
						<h4>{items[rowIndex].name}</h4>
						<h6>{items[rowIndex].sub}</h6>
					</div>
				</div>
			)
		return(
			<div className="my-grid-item">
					<div>
						<h4>{rowIndex}</h4>
					</div>
					<div style={{textAlign: "center"}}>
						<div style={{height: "100px", width: "100px", border: "1px solid #e2e2e2"}}>
						</div>
					</div>
					<div className="text-center">
						<h4>--</h4>
						<h6>--</h6>
					</div>
				</div>
		)
	}

	_renderList = (rowIndex) => {

		const { items }  = this.state

		if(items[rowIndex])
			return(
				<div className="my-list-item" style={{padding: "0px 10px"}}>
					<div className="pull-left">
						<div>
							<h4>{rowIndex}</h4>
						</div>
						<h4>{items[rowIndex].name}</h4>
						<h6>{items[rowIndex].sub}</h6>
					</div>
					<div className="pull-right">
						<div style={{height: "90px", width: "90px", border: "1px solid #e2e2e2"}}>
							<img style={{height: "100%", width: "auto"}} src={items[rowIndex].img}/>
						</div>
					</div>
				</div>
			)
		return(
			<div className="my-list-item" style={{padding: "0px 10px"}}>
				<div className="pull-left">
					<div>
						<h4>{rowIndex}</h4>
					</div>
					<h4>--</h4>
					<h6>--</h6>
				</div>
				<div className="pull-right">
					<div style={{height: "90px", width: "90px", border: "1px solid #e2e2e2"}}>
					</div>
				</div>
			</div>
		)
	}

	getJSON = (yourUrl) =>{
		var Httpreq = new XMLHttpRequest(); // a new request
		Httpreq.open("GET",yourUrl,false);
		Httpreq.send(null);
		return JSON.parse(Httpreq.responseText);         
	}

	handleLoadMore = (count) => {
		console.log("Load More!", count);
		this.setState({loading: true});
		setTimeout(()=>{
			let items = this.state.items.concat(this.state.items)
			this.setState({
				items
			})
			this.setState({loading: false});
		},1000);
	}

	handleSearch = (keyword) => {
		console.log("Search", keyword);
	}

	handleScroll = (row) => {
		console.log("Current Row", row);
	}


	render()
	{
		
		const { items, loading } = this.state

		return(
			<div className="container">

				<DrawerButton
					label="Download Report">
					CONTENT HERE...
				</DrawerButton>

				<Separator/>

				<div>
					<EndlessViewer 
						Count={items.length}
						loading={loading}
						onSearch={this.handleSearch}
						onScroll={this.handleScroll}
						onLoadMore={this.handleLoadMore}
						GridView={this._renderGrid}
						gridHeight={240}
						ListView={this._renderList}
						listHeight={100}/>
				</div>

				{/*<div className="hide">
					<Grid
						items={items}
						loading={loading}
						rowHeight={200}
						gridSize={4}
						onLoadMore={this.handleLoadMore}
						gridView={this._renderGrid}/>
				</div>
*/}
				<Separator/>
			</div>
		)
	}
}

/*class Grid extends Component {
	state = {
		scrollPos: 0,
		currentPos: 0,
		canLoadMore: true
	}

	componentDidMount = () => {
		this.time = {};
	}

	debounce = (callback, wait) => {  
        clearTimeout(this.time);
        this.time = setTimeout(() => {
            this.time = null;
            callback.call();
        }, wait);
	}

	handleUpdateURL = () => {
		console.log("update URL");
	}

	handleOnScroll = () => {
		let obj = document.getElementById('test-grid-view');

		const { onLoadMore, loading, rowHeight } = this.props;
		const { canLoadMore } = this.state;

		this.debounce(this.handleUpdateURL, 500);

		const scrollPos = obj.scrollTop;
		const currentPos = Math.floor(scrollPos / rowHeight)

		this.setState({
			scrollPos: scrollPos,
			currentPos: currentPos
		});
		if((obj.scrollTop + obj.clientHeight) >= obj.scrollHeight)
			if(!loading)
				if(canLoadMore)
					onLoadMore(this.props.items.length);
	}

	_renderRows = (initial, buffer) => {
		const { items, rowHeight, gridView, gridSize } = this.props

		let start = (initial < 0) ? 0 : initial;
		let temp_end = (buffer * gridSize) + start;
		let end = (temp_end > items.length) ? items.length : temp_end;

		let temp = [];

		let group = [];			
		for(let i = start; i < end; i++){
			group.push(items[i])
			if((((i+1) % gridSize) === 0) || i === end -1){
				temp.push(group);
				group = [];
			}
		}

		return temp.map((items,i) => {
			return(
				<GridRow
					key={i}
					row={i + start}
					items={items}
					height={rowHeight}
					renderComponent={gridView}
					gridsize={gridSize}
					/>
				)	
		})
	}

	render(){
		const { items, loading, rowHeight, gridSize  } = this.props;

		const { currentPos } = this.state;

		const temp_top = (Math.ceil(items.length/gridSize) * rowHeight);

		const footer_top = (temp_top < 480) ? 480 : temp_top;

		console.log(items.length, gridSize, rowHeight);

		const buffer = 5;

		return(
			<div className="teh-list-view-wrapper"
				id="test-grid-view"
				style={{position: "relative", overflow: "auto"}}
				onScroll={this.handleOnScroll}>
				<div style={{
					position: "fixed",
					top: 0,
					right: 0
				}}>
					{currentPos}
				</div>

				{this._renderRows(currentPos, buffer)}

				<footer 
					style={{position: "absolute", top: `${footer_top}px`}}
					className="loader">{(loading) ? <i className="fa fa-refresh fa-spin"/> : <span>Load More!</span>}</footer>
			</div>
		)
	}
}

const GridRow = ({items, renderComponent, row, height,gridsize}) => {

	const top = (row * height);

	return(
		<div 
			className="animated fadeIn"
			style={{
			position: "absolute",
			top: `${top}px`,
			width: "100%",
    		display: "-webkit-box"
		}}>
			{items.map((item, i) => {
				return(
					<div key={i} style={{width: `${(100/gridsize)}%`}}>
						{renderComponent(item)}
					</div>
				)	
			})}
		</div>
	)

}
*/
// class List extends Component {

// 	state = {
// 		scrollPos: 0,
// 		currentPos: 0,
// 		canLoadMore: true
// 	}

// 	compoenntDidMount = () => {
// 		this.time = {};
// 	}

// 	debounce = (callback, wait) => {  
//         clearTimeout(this.time);
//         this.time = setTimeout(() => {
//             this.time = null;
//             callback.call();
//         }, wait);
// 	}

// 	handleUpdateURL = () => {
// 		console.log("update URL");
// 	}

// 	handleOnScroll = ()=>{
// 		let obj = document.getElementById('list-view');

// 		const { onLoadMore, loading, rowHeight } = this.props;
// 		const { canLoadMore } = this.state;

// 		this.debounce(this.handleUpdateURL, 500);

// 		this.setState({
// 			scrollPos: obj.scrollTop,
// 			currentPos: Math.floor(obj.scrollTop / rowHeight)
// 		});
// 		if((obj.scrollTop + obj.clientHeight) >= obj.scrollHeight)
// 			if(!loading)
// 				if(canLoadMore)
// 					onLoadMore(this.props.items.length);
// 	}

// 	_renderRows = (initial, buffer) => {

// 		const { items, rowHeight, listView } = this.props

// 		let start = (initial < 0) ? 0 : initial;
// 		let temp_end = buffer + start;
// 		let end = (temp_end > items.length) ? items.length : temp_end;

// 		let temp = [];

// 		for(let i = start; i < end; i++){
// 			let item = items[i];
// 			temp.push(item);
// 		}

// 		return temp.map((item,i) => {
// 			return(
// 				<ListRow
// 					key={i}
// 					row={i + start}
// 					item={item}
// 					height={rowHeight}
// 					renderComponent={listView}
// 					/>
// 				)	
// 		})		
// 	}

// 	render(){

// 		const { items, loading, rowHeight } = this.props;

// 		const { currentPos } = this.state;

// 		const footer_top = (items.length * rowHeight);

// 		const buffer = 5;

// 		return(
// 			<div className="teh-list-view-wrapper"
// 				id="list-view"
// 				style={{position: "relative", overflow: "auto"}}
// 				onScroll={this.handleOnScroll}>
// 				<div style={{
// 					position: "fixed",
// 					top: 0,
// 					right: 0
// 				}}>
// 					{currentPos}
// 				</div>

// 				{this._renderRows(currentPos, buffer)}

// 				{/*items.map((item, row) => {
// 					const top = (row * rowHeight);

// 					const shouldRender = ((top + rowHeight) > scrollPos + rowHeight) && (((scrollPos + wrapperHeight) - rowHeight) > top);

// 					if(shouldRender)
// 						return(
// 							<ListRow
// 								key={row}
// 								row={row}
// 								item={item}
// 								height={rowHeight}
// 								renderComponent={listView}
// 								/>
// 							)
// 					return null;
// 				})*/}
// 				<footer 
// 					style={{position: "absolute", top: `${footer_top}px`}}
// 					className="loader">{(loading) ? <i className="fa fa-refresh fa-spin"/> : <span>Load More!</span>}</footer>
// 			</div>
// 		)
// 	}
// }

// const ListRow = ({item, renderComponent, row, height}) => {

// 	const top = (row * height);

// 	return(
// 		<div 
// 			className="animated fadeIn"
// 			style={{
// 			position: "absolute",
// 			top: `${top}px`
// 		}}>
// 			{renderComponent(item)}
// 		</div>
// 	)

// }

const Separator = () => {
	return(
		<div className="row">
			<span style={{
			    display: "block",
			    height: "2px",
			    background: "#333",
			    margin: "10px 0px"}}/>
		</div>
	)
}

export default TemplateForm