import React, { Component } from 'react';

import "./style.css"

class LoopSelector extends Component{

	render(){
		return(
			<div className="loop-selector loop-box">
				<div className="loop-selector-wrapper">
					<div className="loop-box item">
						<h4>1</h4>
					</div>
					<div className="loop-box item">
						<h4>2</h4>
					</div>
					<div className="loop-box item">
						<h4>3</h4>
					</div>
					<div className="loop-box item">
						<h4>4</h4>
					</div>
					<div className="loop-box item">
						<h4>5</h4>
					</div>
					<div className="loop-box item">
						<h4>6</h4>
					</div>
					<div className="loop-box item">
						<h4>7</h4>
					</div>
					<div className="loop-box item">
						<h4>8</h4>
					</div>
					<div className="loop-box item">
						<h4>9</h4>
					</div>
					<div className="loop-box item">
						<h4 className="text-center"><a>Show More</a></h4>
					</div>
				</div>
			</div>
		)
	}
}

export default LoopSelector