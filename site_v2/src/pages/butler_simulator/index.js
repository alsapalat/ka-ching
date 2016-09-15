import React, { Component } from 'react';

class ButlerSimulator extends Component{

	state  = {
		second: 10,
		bidders: {
			"99":{
				
			}
		}
	}

	componentWillMount(){
		let second = 10;
		setInterval(() => {
			second -= 1;
			if(second <= 0)
				second = 10;
			this.setState({second});
			this.onTick();
		},1000);
	}

	onTick = () =>{

	}



	render(){

		const { second } = this.state;

		return(
			<div>
				<div>{second}</div>
				<div>
					<button onClick={()=>{
						let source = {
							"99":{
								name: "spidey337",
								butler_has_bid: 1
							},
							"127":{
								name: "tehJUGZ",
								butler_has_bid: 1
							},
							"128":{
								name: "shinnotenshi",
								butler_has_bid: 1
							}
						}

						console.log("Source", source);

						const bidderArr = Object.keys(source);
						let bidders = {};
						bidderArr.map((bidder)=>{
							bidders = Object.assign({},bidders,{
								[bidder]: Object.assign({}, source[bidder],{
									butler_has_bid: 0
								})
							})
							return null;
						})

						console.log(bidders);

						//this.fb.child(this.key).child('bidders').set(bidders)
						this.bidders = bidders;
					}}>TICK!</button>
				</div>
			</div>
		)
	}	
}

export default ButlerSimulator