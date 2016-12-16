import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './common/Navigation';
import Loader from './common/Loader';

import Alert from 'react-s-alert';

import './assets/css/style.css'

//Load Firebase Here...

class App extends Component {

	componentDidMount(){
		// eslint-disable-next-line
		$(window).scroll((event) =>{
		    console.log("SCROLLED!");
		});
	}


	render(){
		return(
			<div ref="root" onScroll={this.handleScroll}>
				<Alert 
                    stack={{ limit: 3 }} 
                    effect="scale"/>
                    
				<Loader isLoading={this.props.is_loading}/>
				<Navigation />
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default connect(
	state => {
		const { is_loading } = state.common;
		return{
			is_loading
		}
	}
)(App);