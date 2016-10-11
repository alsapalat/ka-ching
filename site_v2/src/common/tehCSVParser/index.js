import React, { Component } from 'react';

class CSVParser extends Component{

	state = {
		filename: "00001034_NONSUC-e-Forms-A_2013.xls",
		A_Inst_Profile: [
			{
				custom_name: 'name',
				column: "A4",	
				value: "C4"	
			},{
				custom_name: 'hei_type_code',
				column: "A5",	
				value: "C5"	
			},{
				column: "A6",	
				value: "C6"	
			},{
				column: "A7",	
				value: "C7"	
			},{
				column: "A8",	
				value: "C8"	
			},{
				column: "A9",	
				value: "C9"	
			},{
				column: "A10",	
				value: "C10"	
			},{
				custom_name: 'zip_code',
				column: "A11",	
				value: "C11"	
			},{
				custom_name: 'tel_number',
				column: "A12",	
				value: "C12"	
			},{
				column: "A13",	
				value: "C13"	
			},{
				column: "A14",	
				value: "C14"	
			},{
				custom_name: 'email',
				column: "A15",	
				value: "C15"	
			},{
				custom_name: 'website',
				column: "A16",	
				value: "C16"	
			},{
				column: "A17",	
				value: "C17"	
			},{
				column: "A18",	
				value: "C18"	
			},{
				custom_name: 'year_granted',
				column: "A19",	
				value: "C19"	
			},{
				column: "A20",	
				value: "C20"	
			},{
				column: "A21",	
				value: "C21"	
			},{
				column: "A22",	
				value: "C22"	
			},{
				column: "A23",	
				value: "C23"	
			},{
				column: "A24",	
				value: "C24"	
			},{
				column: "A25",	
				value: "C25"	
			},{
				column: "A26",	
				value: "C26"	
			}
		],
		former_names: {
			columns: [
				{
					name: "name",
					col: "A",
					row: 30,
				},
				{
					name: "year",
					col: "C",
					row: 30,
				},
			],
			row_count: -1 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
		},
		A_Dean_Profile: {
			columns: [
				{
					name: "name_of_dean",
					col: "A",
					row: 3,
				},{
					name: "designation",
					col: "B",
					row: 3,
				},{
					name: "college_assignment",
					col: "C",
					row: 3,
				},{
					name: "baccalaureate",
					col: "D",
					row: 3,
				},{
					name: "masters",
					col: "E",
					row: 3,
				},{
					name: "doctoral",
					col: "F",
					row: 3,
				}
			],
			row_count: -1 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
		},
		ref_Institutional_Type: {
			columns: [
				{
					name: "id",
					col: "A",
					row: 1
				},{
					name: "type",
					col: "B",
					row: 1
				}
			]
		},
		json: ""
	}

	componentDidMount(){
		/* set up XMLHttpRequest */
		var url = `dist/src/${this.state.filename}`;
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

		  let profile = this.generateInstitutionProfile(workbook.Sheets["A Inst Profile"]);

		  let former_names = this.generateFromRow(workbook.Sheets["A Inst Profile"],this.state.former_names);

		  let dean_profile = this.generateFromRow(workbook.Sheets["A Dean Profile"],this.state.A_Dean_Profile);

		  //console.log(profile)

		  let format_data = Object.assign({},{
		  	...profile,
		  	former_names,
		  	dean_profile
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
						item[cols.name] = (src[key].v) ? src[key].v : ""
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