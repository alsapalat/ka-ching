import React, { Component, PropTypes } from 'react';

import './assets/style.css';

class TehChat extends Component{

	state = {
		open: false,
		msg: ""
	}

	handleSendMessage = (msg) => {
		if(msg.length < 1)
			return;
		console.log("Send Message!",msg.length, msg);
		this.setState({msg: ""})
	}

	handleToggleChat = (open) => {

		this.setState({open: open})

		if(!open){
			let obj = document.getElementById('chat-toggle');
			obj.focus();
		}
	}

	render(){

		const { open, msg } = this.state;
		const { room } = this.props;

		return(
			<form className={`teh-chat bottom-right ${(open) ? "open" : ""}`} onSubmit={(e)=>{
				e.preventDefault();
				if(!open){
					let obj = document.getElementById('chat-input')
					obj.focus();
					return this.handleToggleChat(!open)
				}
				this.handleSendMessage(e.target.value);
			}}>
				<button 
					id="chat-toggle"
					type="submit"
					disabled={(open) ? (msg.length > 0) ? false : true : false}
					className="toggle"
					><i className="fa fa-paper-plane"/></button>
				<div className="chat-panel">
					<div className="chat-header">
						<span>{room.label}</span>
						<button onClick={(e)=>{
							e.preventDefault();
							this.handleToggleChat(!open)
						}}className="pull-right"><i className="fa fa-close"/></button>
					</div>
					<div className="chat-content">

					</div>
					<div className="chat-input">
						<textarea 
							onKeyUp={(e)=>{
								switch(e.keyCode){
									case 13:
										e.preventDefault();
										return this.handleSendMessage(e.target.value);
									case 27:
										e.preventDefault();
										this.handleToggleChat(false)
										return;
									default:
										return;
								}
							}}
							onChange={(e)=>{
							this.setState({msg: e.target.value});
						}}type="text" value={msg} id="chat-input"/>
					</div>
				</div>
			</form>
		)
	}
}

TehChat.propTypes = {
	room: PropTypes.object.isRequired,
}

export default TehChat