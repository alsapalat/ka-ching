import React, { Component } from 'react';

import ListView from './tehlistView';

class TemplateForm extends Component{

	state = {
		items: [],
		loading: false
	}

	componentWillMount(){
		this.setState({
			items: this.getJSON('http://localhost:8090/api/v1/report/downloadable/site-log?start_date=&end_date=&action_type=&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDkwXC9hcGlcL3YxXC9jb3JlXC9hdXRoIiwiaWF0IjoxNDczOTI2Mjg5LCJleHAiOjE0NzcwODIyODksIm5iZiI6MTQ3MzkyNjI4OSwianRpIjoiNTQ3YWM3ZTU2ZjM5NWQ1YmNmMjNkZmY0Njk5MDNhYTYifQ.o0kc2qHVQ8MEdtkcYL9KxYm4HNQHyGWANBlC-z_cwUg').data
		})
	}

	_renderGrid = (item) => {
		return(
			<div className="my-grid-item">
				{/*<div style={{textAlign: "center"}}>
					<img style={{height: "100px"}}src={item.img}/>
				</div>*/}
				<div className="text-center">
					<h4>{item.Username}</h4>
					<h6>{item.Action}</h6>
					{item.Date}
				</div>
			</div>
		)
	}

	_renderList = (item) => {
		return(
			<div className="my-list-item">
				<div className="pull-left">
					<h4>{item.Username}</h4>
					<h6>{item.Action}</h6>
					{item.Date}
				</div>
				{/*<div className="pull-right">
					<img style={{height: "90px"}}src={item.img}/>
				</div>*/}
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
			console.log(items.length)
			this.setState({loading: false});
		},1000);
	}


	render()
	{
		/*const items = [
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
			}
		];*/

		const { items, loading } = this.state

		return(
			<div className="container">
				<div className="hide">
					<ListView 
						items={items}
						gridView={this._renderGrid}
						listView={this._renderList}/>
				</div>

				<List 
					items={items}
					loading={loading}
					rowHeight={100}
					onLoadMore={this.handleLoadMore}
					listView={this._renderList}/>

				<Separator/>

			</div>
		)
	}
}

class List extends Component {

	state = {
		scrollPos: 0,
		currentPos: 0,
		canLoadMore: true
	}

	compoenntDidMount = () => {
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

	handleOnScroll = ()=>{
		let obj = document.getElementById('list-view');

		const { onLoadMore, loading } = this.props;
		const { canLoadMore } = this.state;

		this.debounce(this.handleUpdateURL, 500);

		this.setState({
			scrollPos: obj.scrollTop,
			currentPos: Math.floor(obj.scrollTop / this.props.rowHeight)
		});
		if((obj.scrollTop + obj.clientHeight) >= obj.scrollHeight)
			if(!loading)
				if(canLoadMore)
					onLoadMore(this.props.items.length);
	}

	_renderRows = (initial, buffer) => {

		const { items, rowHeight, listView } = this.props

		let start = (initial < 0) ? 0 : initial;
		let temp_end = buffer + start;
		let end = (temp_end > items.length) ? items.length : temp_end;

		let temp = [];

		for(let i = start; i < end; i++){
			let item = items[i];
			temp.push(item);
		}

		return temp.map((item,i) => {
			return(
				<ListRow
					key={i}
					row={i + start}
					item={item}
					height={rowHeight}
					renderComponent={listView}
					/>
				)	
		})
		
	}

	render(){

		const { items, loading, rowHeight } = this.props;

		const { currentPos } = this.state;

		const footer_top = (items.length * rowHeight);

		const buffer = 5;

		return(
			<div className="teh-list-view-wrapper"
				id="list-view"
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

				{/*items.map((item, row) => {
					const top = (row * rowHeight);

					const shouldRender = ((top + rowHeight) > scrollPos + rowHeight) && (((scrollPos + wrapperHeight) - rowHeight) > top);

					if(shouldRender)
						return(
							<ListRow
								key={row}
								row={row}
								item={item}
								height={rowHeight}
								renderComponent={listView}
								/>
							)
					return null;
				})*/}
				<footer 
					style={{position: "absolute", top: `${footer_top}px`}}
					className="loader">{(loading) ? <i className="fa fa-refresh fa-spin"/> : <span>Load More!</span>}</footer>
			</div>
		)
	}
}

const ListRow = ({item, renderComponent, row, height}) => {

	const top = (row * height);

	return(
		<div 
			className="animated fadeIn"
			style={{
			position: "absolute",
			top: `${top}px`
		}}>
			{renderComponent(item)}
		</div>
	)

}

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