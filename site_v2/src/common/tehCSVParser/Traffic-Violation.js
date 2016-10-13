import React, { Component } from 'react';

class CSVParser extends Component{

	state = {
		filename: "traffic_violations.xls",
		violations: {
			columns: [
				{
					name: "violation",
					col: "A",
					row: 1,
				},
				{
					name: "fine",
					col: "B",
					row: 1,
				},
			],
			row_count: -1// if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
		},
		json: ""
	}

	componentDidMount(){
		/* set up XMLHttpRequest */
		var url = `../dist/src/${this.state.filename}`;
		var oReq = new XMLHttpRequest();
		oReq.open("GET", url, true);
		oReq.responseType = "arraybuffer";

		oReq.onload = (e) => {
		  var arraybuffer = oReq.response;

		  /* convert data to binary string */
		  var data = new Uint8Array(arraybuffer);
		  // eslint-disable-next-line
		  var arr = new Array();
		  for(var i = 0; i !== data.length; ++i) arr[i] = String.fromCharCode(data[i]);
		  var bstr = arr.join("");

		  /* Call XLSX */
		  // eslint-disable-next-line
		  var workbook = XLSX.read(bstr, {type:"binary"});

		  let v_raw = this.generateFromRow(workbook.Sheets["Sheet1"],this.state.violations);

		  let violations = this.newformatViolation(v_raw);

		  //console.log(profile)

		  let format_data = Object.assign({},{
		  	violations,
		  });

		  console.log(format_data)

		  this.setState({
		  	json: JSON.stringify(format_data)
		  })

		  /* DO SOMETHING WITH workbook HERE */
		}

		oReq.send();
	}

	newformatViolation = (src,cat="A") => {
		let new_v = [];
		for(let i = 0; i<src.length;i++){
			let v_arr = src[i].violation.split('.');
			let isNumber = isNaN(v_arr[0])
			if(!isNumber){
				new_v.push({
					id: v_arr[0],
					category: "A",
					violation: v_arr[1].trim(),
					fine: src[i].fine
				})
			}else{
				let obj = new_v[new_v.length-1]
				let obj_sub = obj.sub || [];
				new_v[new_v.length-1] = Object.assign({}, obj, {
					sub: obj_sub.concat(src[i])
				})
			}
		}
		return new_v;
	}

	generateInstitutionProfile = (src) => {
		const fields = this.state.A_Inst_Profile;
		let obj = {};
		fields.map((f)=>{
			let field_name = (f.custom_name) ? f.custom_name : (src[f.column].v).replace(/\s+/g, '_').toLowerCase();		  	
				obj = Object.assign({},obj,{
				[field_name]:(src[f.value]) ? src[f.value].v : ""
			})
			return null;
		})
		return obj
	}

	generateFromRow = (src,fields) => {

		let items = [];

		let start_row = fields.columns[0].row + 1;

		if(fields.row_count === -1)
		{
			let cond = true;
			let row = 0;

			while(cond){
				let has_data = false;

				let item = {};

				// eslint-disable-next-line
				fields.columns.map((cols) => {
					let key = `${cols.col}${row+start_row}`
					if(src[key]){
						has_data = true;
						item[cols.name] = (typeof src[key].v !== "undefined") ? src[key].v : "";
					}
					return null;
				})		

				if(!has_data){
					cond = false;
				}else{
					items.push(item)
				}
				row++;
			}

			return items;
		}

		for(let i = 0; i < fields.row_count;i++){
			let item = {};
			fields.columns.map((cols) => {
				let key = `${cols.col}${i+start_row}`
				if(src[key])
					item[cols.name] = (typeof src[key].v !== "undefined") ? src[key].v : "";
				return null;
			})

			items.push(item)
		}
		return items;
	}

	render(){

		const { json, filename} = this.state;

		return(
			<div>
				<div>CSV Parser for - {filename}</div>
				<div>
					<textarea style={{		
    					width: "100%",
    					height: "95vh",
					}}value={json}/>
				</div>

			</div>
		)
	}
}

export default CSVParser