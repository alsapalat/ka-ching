import React, { Component, PropTypes } from 'react';
import Firebase from 'firebase';

import './assets/style.css';

class TehChat extends Component{

	state = {
		open: false,
		connected: false,
		loading: true,
		label: "",
		msg: "",
		messages: {},
		msgs: [
			{
				sender: {
					id: -1,
					name: "<System>"
				},
				message: "Chat Page loaded..."
			}
		],
		typing: {}
	}

	componentWillMount(){
		this.initializeFB(this.props.firebase);
	}

	componentDidMount(){
		setTimeout(()=>{
			this.handleToggleChat(true);
		},3000);		
	}

	scrollToBottom = (id) => {
		setTimeout(()=>{
			let obj = document.getElementById(id);
			obj.scrollTop = obj.scrollHeight;
		},50)
	}

	initializeFB = (fb) => {
		this.fb = Firebase.initializeApp(fb);

		const room_id = this.props.room.id;
		const label = this.props.room.label;

		this.chatRef = Firebase.database().ref(`/chat`);
		this.chatRoomRef = Firebase.database().ref(`/chat/${room_id}`);

		this.chatRoomRef.on('value', snapshot => {
			if(!snapshot.exists()){
				return this.chatRoomRef.set({
					label: label,
					messages: {
						"-0A": this.fbMessage({id: -1, name: "<System>"},`chat room '${room_id}' was created...`)
					},
					typing: {
						"-01": {
							name: "System"
						}
					}
				})
			}
		})

		this.chatRef.on('child_added', snapshot =>{
			if(snapshot.exists()){
				this.watchChat(snapshot);
				return;
			}
			
		})

	}

	isTyping = (param) => {
		const { sender } = this.props.room;
		this.chatRoomRef.child('/typing').child(this.props.room.sender.id).set({
			name: (param) ? sender.name : null
		})
	}

	watchChat = (snapshot) => {
		const { label, messages } = snapshot.val();

		this.chatRoomRef.on('child_changed', snapshot=>{
			this.socketRoomChange(snapshot);
		})

		this.setState({
			connected: true,
			loading: false,
			label,
			messages
		})

		setTimeout(()=>{
			this.scrollToBottom('chat-content');	
		},100);		
	}

	socketRoomChange = (s) => {
		switch(s.key){
			case "label":
				return this.setState({label: s.val()})
			case "messages":
				setTimeout(()=>{
					this.scrollToBottom('chat-content');	
				},100);				
				return this.setState({messages: s.val()})
			case "typing":
				return this.setState({typing: s.val()})
			default:
		}
	}

	fbMessage = (sender, message) => {
		return{
			sender,
			message
		}
		// return {[new Date().getTime()]:{
		// 	sender: sender,
		// 	message: message
		// }}
	}

	handleSendMessage = (msg) => {
		if(msg.length < 1)
			return;
		
		//const { msgs } = this.state;
		const { room } = this.props;
		
		this.chatRoomRef.child('/messages').push().set(this.fbMessage(room.sender, msg));
		this.setState({
			msg: ""
		})

		this.chatRoomRef.child('/typing').child(this.props.room.sender.id).set({
			name: null
		})

		this.scrollToBottom('chat-content');

		// this.setState({
		// 	msg: "",
		// 	msgs: msgs.concat({
		// 		sender: room.sender,
		// 		message: msg
		// 	})
		// })

		// setTimeout(()=>{
		// 	const nmsgs = this.state.msgs;
		// 	this.setState({
		// 		msgs: nmsgs.concat({
		// 			sender: {
		// 				id: 0,
		// 				name: "System"
		// 			},
		// 			message: "Auto Reply..."
		// 		})
		// 	})

		// setTimeout(()=>{
		// 	let obj = document.getElementById('chat-content');
		// 	obj.scrollTop = obj.scrollHeight;
		// },50)
	}

	handleToggleChat = (open) => {

		this.setState({open: open});

		if(!open){
			let obj = document.getElementById('chat-toggle');
			obj.focus();
		}
	}

	getTyping = (users) =>{
		let t = ""
		let arr = Object.keys(users);
		let t_count = 0;
		arr.map((user,i)=>{
			if(user !== "-01" && user !== `${this.props.room.sender.id}`){
				t_count += 1;
				t += `${(t_count > 1)?", ":""}${users[user].name}`
			}
			return null;
		})
		if(t_count > 0)
			return `${t} ${(t_count > 1) ? "are" : "is"} typing...`;
		return "";
	}

	render(){

		const { open, msg, connected, loading, label, messages, typing } = this.state;

		const { room } = this.props;

		const msgs = Object.keys(messages);

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
					disabled={(open) ? (msg.length > 0) ? false : true : (connected) ? false : true}
					className="toggle"
					><i className={`fa ${(loading) ? "fa-spin fa-spinner" : "fa-paper-plane"}`}/></button>
				<div className="chat-panel">
					<div className="chat-header">
						<span>{label}</span>
						<button onClick={(e)=>{
							e.preventDefault();
							this.handleToggleChat(!open);
						}}className="pull-right"><i className="fa fa-close"/></button>
					</div>
					<div className="chat-content" id="chat-content">
						{msgs.map((msg,i)=>{
							return(
								<div className="chat-message" key={i}>
									<div className={`chat-bubble ${(messages[msg].sender.id === room.sender.id) ? "arrow self" : (messages[msg].sender.id === -1) ? "system" : ""}`}>
										<div className="name">{messages[msg].sender.name}</div>
										<div className="message">{messages[msg].message}</div>
									</div>
								</div>
							)
						})}
						<div className="chat-info">
							<span>{this.getTyping(typing)}</span>
						</div>
					</div>
					<div className="chat-input">
						<textarea 
							onKeyUp={(e)=>{
								e.preventDefault();
								switch(e.keyCode){
									case 13:
										return this.handleSendMessage(msg);
									case 27:
										this.handleToggleChat(false)
										return;
									default:
										return;
								}
							}}
							onChange={(e)=>{
								let val = e.target.value
								this.isTyping((val.length > 0) ? true : false)
								this.setState({msg: val});
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