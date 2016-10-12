import React, { Component } from 'react';

class CSVParser extends Component{

	state = {
		filename: "00001040_SUC-NF-FORM-A_2013.xls",
		FORM_A1: [
			{
				custom_name: 'name',
				column: "A4",	
				value: "C4"	
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
				column: "A11",	
				value: "C11"	
			},{
				column: "A12",	
				value: "C12"	
			},{
				column: "A13",	
				value: "C13"	
			},{
				column: "A14",	
				value: "C14"	
			},{
				column: "A15",	
				value: "C15"	
			},{
				column: "A16",	
				value: "C16"	
			},{
				column: "A17",	
				value: "C17"	
			},{
				column: "A18",	
				value: "C18"	
			},{
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
			}
		],
		FORM_A2: {
			columns: [
				{
					name: "seq_no",
					col: "A",
					row: 12,
				},{
					name: "name",
					col: "B",
					row: 12,
				},{
					name: "type",
					col: "C",
					row: 12,
				},{
					name: "code",
					col: "D",
					row: 12,
				},{
					name: "region",
					col: "E",
					row: 12,
				},{
					name: "city_province",
					col: "F",
					row: 12,
				},{
					name: "year_first_operation",
					col: "G",
					row: 12,
				},{
					name: "land_area",
					col: "H",
					row: 12,
				},{
					name: "distance_from_main_campus",
					col: "I",
					row: 12,
				},{
					name: "autonomous_from_the_main_campus",
					col: "J",
					row: 12,
				},{
					name: "position_of_highest_official",
					col: "K",
					row: 12,
				},{
					name: "name_of_highest_official",
					col: "L",
					row: 12,
				},{
					name: "former_name",
					col: "M",
					row: 12,
				},{
					name: "x_coordinate",
					col: "N",
					row: 12,
				},{
					name: "y_coordinate",
					col: "O",
					row: 12,
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

		  let profile = this.generateInstitutionProfile(workbook.Sheets["FORM A1"]);

		  let profile_2 = this.generateFromRow(workbook.Sheets["FORM A2"],this.state.FORM_A2);

		  //console.log(profile)

		  let format_data = Object.assign({},{
		  	...profile,
		  	campuses: profile_2
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