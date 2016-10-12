import React, { Component } from 'react';

class CSVParser extends Component{

	state = {
		filename: "00001040_SUC-PRC-List-of-Graduates_2013.xls",
		FORM: {
			columns: [
				{
					name: "student_id",
					col: "A",
					row: 10,
				},{
					name: "date_of_birth",
					col: "B",
					row: 10,
				},{
					name: "last_name",
					col: "C",
					row: 10,
				},{
					name: "first_name",
					col: "D",
					row: 10,
				},{
					name: "middle_name",
					col: "E",
					row: 10,
				},{
					name: "sex",
					col: "F",
					row: 10,
				},{
					name: "date_graduated",
					col: "G",
					row: 10,
				},{
					name: "program_name",
					col: "H",
					row: 10,
				},{
					name: "program_major",
					col: "I",
					row: 10,
				},{
					name: "authority_number",
					col: "J",
					row: 10,
				},{
					name: "year_granted",
					col: "K",
					row: 10,
				}
			],
			row_count: -1 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
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

		  let list_of_graduates = this.generateFromRow(workbook.Sheets["List of Graduates"],this.state.FORM);

		  //console.log(profile)

		  let format_data = Object.assign({},{
	  		list_of_graduates
		  });

		  console.log(format_data)

		  this.setState({
		  	json: JSON.stringify(format_data)
		  })

		  /* DO SOMETHING WITH workbook HERE */
		}

		oReq.send();
	}

	generateInstitutionProfile = (src) => {
		const fields = this.state.FORM_A1;
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
		if(fields.row_count === -1)
		{
			let cond = true;
			let row = 0;

			let start_row = fields.columns[0].row + 1;

			let items = [];

			while(cond){
				let has_data = false;

				let item = {};

				// eslint-disable-next-line
				fields.columns.map((cols) => {
					let key = `${cols.col}${row+start_row}`
					if(src[key]){
						has_data = true;
						item[cols.name] = (typeof src[key].v !== "undefined") ? src[key].v : "";
						return null;
					}
					item[cols.name] = "";
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