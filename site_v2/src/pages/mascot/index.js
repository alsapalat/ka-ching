import React, { Component } from 'react';
import Draggable from 'react-draggable';

//import { AnimatedSpriteSheet } from 'react-spritesheet'
import SpriteAnimator from 'react-sprite-animator';

class Mascot extends Component {


	state = {
		update: 30,
		onGround: false,
		isGrabbed: false,
		position: { x: 0, y: 0 },
		velocity: { x: 0, y: 0 },
		gravity: 1,
		friction: 1,
		prevPos: {
			x: 0,
			y: 0
		}
	}

	componentDidMount(){
		this.timer = setInterval(this.tick,this.state.update)
	}

	componentWillUnmount(){
		clearInterval(this.timer);
	}

	tick = () => {
		if(!this.state.onGround && !this.state.isGrabbed){
			let { x, y } = this.state.position;
			let ground = 14;

			let velX = this.state.velocity.x * 0.5;
			let velY = (this.state.velocity.y - this.state.gravity) * 1.1;

			this.setState({
				onGround: (y < ground) ? false : true,
				position: {
					x: x - velX,
					y: (y < ground) ? y - velY : ground
				},
				velocity: {
					x: velX,
					y: velY
				}
			})
		}
	}

	handleStart = (params) => {
		//console.log("Start", params)
		this.setState({ isGrabbed: true});
	}

	handleDrag = (e, data) => {
		this.setState({
			prevPos: {
				x: data.lastX,
				y: data.lastY
			}
		})
	}

	handleStop = (e, data) => {

		let iniVel = {
			x: this.state.prevPos.x - data.lastX,
			y: this.state.prevPos.y - data.lastY
		}

		this.setState({ 
			isGrabbed: false,
			onGround: false,
			velocity: {
				x: iniVel.x,
				y: 2//iniVel.y
			},
			position: {
				x:data.lastX,
				y:data.lastY,
			}
		});
	}

	render() {
		return (
			<div>
				<Draggable
			        defaultPosition={{x: 0, y: 0}}
			        position={this.state.position}
			        zIndex={100}
			        onStart={this.handleStart}
			        onDrag={this.handleDrag}
			        onStop={this.handleStop}>
			        	<div className="well" style={{height: "200px", width:"200px", boxShadow: "0px 0px 10px #000"}}>
			        		{/*hello world
		        			<AnimatedSpriteSheet
								filename="/dist/sheet_idle.png"
								initialFrame={0}
								frame={{ width: 512, height: 512 }}
								bounds={{ x: 0, y: 0, width: 5120, height: 1024 }}
								isPlaying
								loop
								speed={50}/>*/}

							{/*<SpriteAnimator
								sprite='/dist/sheet_idle.png'
								width={512}
								height={512}
								wrapAfter={10}
								frameCount={20}
								fps={24}
							/>*/}
			        	</div>
			      </Draggable>
			</div>
		);
	}
}

export default Mascot;
