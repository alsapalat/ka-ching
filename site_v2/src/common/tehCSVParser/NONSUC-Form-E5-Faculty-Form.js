import React, { Component } from 'react';

class CSVParser extends Component{

	state = {
		filename: "00001034_NONSUC-Form-E5-Faculty-Form_2013.xls",
		FORM: {
			columns: [
				{
					name: "name",
					col: "A",
					row: 9,
				},{
					name: "fulltime_parttime_code",
					col: "B",
					row: 9,
				},{
					name: "gender_code",
					col: "C",
					row: 9,
				},{
					name: "primary_teaching_discipline",
					col: "D",
					row: 9,
				},{
					name: "highest_degree_attained_3_code",
					col: "E",
					row: 9,
				},{
					name: "bachelors_degree_name",
					col: "F",
					row: 9,
				},{
					name: "bachelors_degree_code",
					col: "G",
					row: 9,
				},{
					name: "masters_degree_name",
					col: "H",
					row: 9,
				},{
					name: "masters_degree_code",
					col: "I",
					row: 9,
				},{
					name: "doctorate_degree_name",
					col: "J",
					row: 9,
				},{
					name: "doctorate_degree_code",
					col: "K",
					row: 9,
				},{
					name: "professional_license_code",
					col: "L",
					row: 9,
				},{
					name: "tenure_of_employment_code",
					col: "M",
					row: 9,
				},{
					name: "faculty_rank_code",
					col: "N",
					row: 9,
				},{
					name: "teaching_load_code",
					col: "O",
					row: 9,
				},{
					name: "subjects_taught",
					col: "P",
					row: 9,
				},{
					name: "annual_salary_code",
					col: "Q",
					row: 9,
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

		  let faculty_data_entry_form = this.generateFromRow(workbook.Sheets["Faculty Data Entry Form"],this.state.FORM);

		  //console.log(profile)

		  let format_data = Object.assign({},{
	  		faculty_data_entry_form
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