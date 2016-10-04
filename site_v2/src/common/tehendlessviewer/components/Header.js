import React, { Component } from 'react';

const Header = ({onToggleMode, mode, onSearch, onClearSearch, count}) => {

	return(
		<div className="header">
			<div>
				<SearchInput 
					onSearch={onSearch}
					onClearSearch={onClearSearch}/>
				<span className="total-items">{count} items loaded...</span>
			</div>

			<div className="pull-right">
				<button 
					className="btn btn-default"
					onClick={()=>{
						if(mode === "list")
							return onToggleMode("grid");
						return onToggleMode("list");
					}}>
					{(mode === "list") ?
						<i className="fa fa-th"/>
					:
						<i className="fa fa-list"/>
					}
				</button>
			</div>
		</div>
	)
}

class SearchInput extends Component{

	state = {
		keyword: "",
		show_clear: false
	}

	render(){

		const { show_clear, keyword } = this.state;

		const { onSearch, onClearSearch } = this.props;

		return(
			<div className="form-group search">
				<form onSubmit={(e)=>{
						e.preventDefault();
						onSearch(keyword);
					}}>
					<input 
						value={keyword}
						className="form-control" 
						onChange={(e)=>{
							let show_clear = true;
							let keyword = e.target.value;

							if(keyword.length === 0){
								show_clear = false;
								onClearSearch("");
							}

							this.setState({
								keyword,
								show_clear 
							})
						}}
						placeholder={"Search..."}/>
					</form>
				{(show_clear)?
					<button 
						onClick={()=>{
							onClearSearch("");
							this.setState(
							{
								keyword: "",
								show_clear: false
							})
						}}
						className="clear"><i className="fa fa-times-circle"/></button>
				:
					<span />
				}
			</div>
		)	
	}
}

export default Header