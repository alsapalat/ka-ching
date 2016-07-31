import React, { Component } from 'react';
import { connect } from 'react-redux';

import TehSelector from '../../../common/tehselector';

import * as actions from '../actions'

class SeederButler extends Component{

	handleSelectUser = (data) =>{
		this.props.updateSelectedUsers(data);
	}

	handleSelectAuction = (data) =>{
		this.props.updateSelectedAuctions(data);
	}

	handleSubmit = (data) =>{
		this.props.seedButler({
			...data,
			...this.props.seed_butler
		})
	}

	render(){

		let users = [
			{
				id: 1,
				label: 'spidey337',
				data: {
					description: 'Lorem Ipsum 1'
				}
			},{
				id: 2,
				label: 'shinnotenshi',
				data: {
					description: 'Lorem Ipsum 2'
				}
			},{
				id: 3,
				label: 'tehJUGZ',
				data: {
					description: 'Lorem Ipsum 3'
				}
			},{
				id: 4,
				label: 'jugapugz',
				data: {
					description: 'Lorem Ipsum 4'
				}
			}
		]

		let auctions = [
			{
				id: 1,
				label: 'Piso Pak 10',
				data: {
					description: 'Lorem Ipsum 1'
				}
			},{
				id: 2,
				label: 'Piso Pak 50',
				data: {
					description: 'Lorem Ipsum 2'
				}
			},{
				id: 3,
				label: 'Piso Pak 100',
				data: {
					description: 'Lorem Ipsum 3'
				}
			}
		]

		return(
			<div>
				<div className="col-sm-3">
					<label>
						User
					</label>
					<TehSelector 
						data={ users }
						onSelect={ this.handleSelectUser }/>
				</div>

				<div className="col-sm-3">
					<label>
						Auction
					</label>
					<TehSelector 
						data={ auctions }
						onSelect={ this.handleSelectAuction }/>
				</div>

				<div className="col-sm-6">
					<SeedButlerCredits
						onSubmit={this.handleSubmit}
						/>
				</div>
			</div>
		)
	}
}

const SeedButlerCredits = ({onSubmit}) =>{

	let credit_from = {};
	let credit_to = {};

	return(
		<div>
			<label>
				Butler Settings
			</label>
			<form className="well well-small" onSubmit={(e) =>{
							e.preventDefault();
							onSubmit({
								from: credit_from.value,
								to: credit_to.value
							})
						}}>
				<div className="input-group">
					<label>Credits</label>
					<table>
						<tbody>
							<tr>
								<td colSpan="3">Credits(Range)</td>
							</tr>
							<tr>
								<td>
									<input 
										ref={(node) => {
											credit_from = node;
											return;
										}}
										required
										className="form-control"
										placeholder="from"/>
								</td>
								<td style={{
								    width: "30px",
								    textAlign: "center"}}>~</td>
								<td>
									<input 
										ref={(node) => {
											credit_to = node;
											return;
										}}
										required
										className="form-control"
										placeholder="to"/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div style={{marginTop: "5px"}}>
					<button 
						type="submit"
						className="btn btn-primary btn-block">Seed Data</button>
				</div>
			</form>
		</div>
	)
}

export default  connect(
	state =>{
		const { seed_butler } = state;
		return{
			seed_butler
		}
	},
	actions
)(SeederButler)