import React, { Component } from 'react';
import history from 'react-router/lib/browserHistory';

import { Link } from 'react-router';

import "../assets/style.css";

class Home extends Component{

	state = {
		fullnav: true,
		search: "",
		search_mode: 0,
		search_options: [
			"Product",
			"User"
		]
	}

	handleOnScroll = () => {
		let obj = document.getElementById('main');
		let temp = (obj.scrollTop < 200);
		if(temp !== this.state.fullnav)
			this.setState({
				fullnav: temp
			})
	}

	render(){

		const { fullnav, search_options, search } = this.state;

		const mode = this.props.location.query.search_mode || 0;

		const search_mode = (mode < search_options.length) ? mode : 0;
		const search_advance = this.props.location.query.search_advance || 0;

		const isHome = (this.props.location.pathname === "/ka-ching");

		const show_full_nav = (isHome) ? fullnav : false;

		return(
			<div id="main" onScroll={this.handleOnScroll}>
				
				<nav className={`navbar navbar-fixed-top navi-custom ${(show_full_nav) ? "navi-L" : "navi-S"}`}>

					<div className="navi-header col-xs-12">

					</div>

					<div className="container">

						<div className="col-xs-2 text-center">
							<Link to="/ka-ching" className="navi-logo">
								<i className="fa fa-recycle"/>
							</Link>
						</div>
						<form onSubmit={(e)=>{
							e.preventDefault()
							history.push({
								pathname: `/ka-ching/search`,
								query: {
									q: search,
									search_mode,
									search_advance,
								}
							})
						}}className="input-group navi-search col-xs-10">
							<div className="input-group-btn">
								<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span className="hidden-xs">{search_options[search_mode]}</span> <span className="caret"></span>
								</button>
								<ul className="dropdown-menu">
									{search_options.map((option,i) => {
										return(
											<li key={i} className={(i===search_mode) ? "active" : ""}>
												<a onClick={()=>{
													history.push({
														pathname: `/ka-ching/search`,
														query: {
															q: search,
															search_mode: i,
															search_advance
														}
													})
													document.getElementById('search-input').focus();
												}}>{option}</a>
											</li>
										)
									})}
								</ul>
							</div>
							<input 
								id="search-input"
								placeholder="Search..."
								onChange={(e)=>{
									this.setState({
										search: e.target.value
									})
								}}
								value={search}
								className="form-control"/>
							<div className="input-group-btn">
								<button 
									type="submit"
									className="btn btn-default">
									<i className="fa fa-search"/> <span className="hidden-xs">Search!</span>
								</button>
								<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span className="caret"></span> 
									<span className="sr-only">Toggle Dropdown</span>
								</button> 
								<ul className="dropdown-menu dropdown-menu-right"> 
									<li><a onClick={()=>{
										history.push({
											pathname: `/ka-ching/search`,
											query: {
												q: search,
												search_mode,
												search_advance: 1,
											}
										})
									}}>Advance Search</a></li>
								</ul>
							</div>
							{/*<span className="input-group-btn">
								<button className="btn btn-default"><i className="fa fa-search"/> <span className="hidden-xs">Search!</span></button>
							</span>*/}
						</form>
					</div>	
				</nav>

				<div className={`container animated fadeIn ${(show_full_nav) ? "navi-L" : "navi-S"}`}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Home