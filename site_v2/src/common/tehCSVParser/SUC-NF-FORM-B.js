import React, { Component } from 'react';

class CSVParser extends Component{

	state = {
		filename: "00001040_SUC-NF-FORM-B_2013.xls",
		FORM: {
			columns: [
				{
					name: "name",
					col: "B",
					row: 9,
				},{
					name: "code",
					col: "C",
					row: 9,
				},{
					name: "major",
					col: "D",
					row: 9,
				},{
					name: "major_code",
					col: "E",
					row: 9,
				},{
					name: "auth_to_offer_category",
					col: "F",
					row: 9,
				},{
					name: "auth_to_offer_serial",
					col: "G",
					row: 9,
				},{
					name: "auth_to_offer_year",
					col: "H",
					row: 9,
				},{
					name: "is_thesis_dissertation_required",
					col: "I",
					row: 9,
				},{
					name: "program_status",
					col: "J",
					row: 9,
				},{
					name: "program_calendar",
					col: "K",
					row: 9,
				},{
					name: "program_length_years",
					col: "L",
					row: 9,
				},{
					name: "units_lab",
					col: "M",
					row: 9,
				},{
					name: "units_lecture",
					col: "N",
					row: 9,
				},{
					name: "units_total",
					col: "O",
					row: 9,
				},{
					name: "tuition_per_unit",
					col: "P",
					row: 9,
				},{
					name: "program_fee",
					col: "Q",
					row: 9,
				},{
					name: "new_students_m",
					col: "R",
					row: 9,
				},{
					name: "new_students_F",
					col: "S",
					row: 9,
				},{
					name: "1st_year_m",
					col: "T",
					row: 9,
				},{
					name: "1st_year_f",
					col: "U",
					row: 9,
				},{
					name: "2nd_year_m",
					col: "V",
					row: 9,
				},{
					name: "2nd_year_f",
					col: "W",
					row: 9,
				},{
					name: "3rd_year_m",
					col: "X",
					row: 9,
				},{
					name: "3rd_year_f",
					col: "Y",
					row: 9,
				},{
					name: "4th_year_m",
					col: "Z",
					row: 9,
				},{
					name: "4th_year_f",
					col: "AA",
					row: 9,
				},{
					name: "5th_year_m",
					col: "AB",
					row: 9,
				},{
					name: "5th_year_f",
					col: "AC",
					row: 9,
				},{
					name: "6th_year_m",
					col: "AD",
					row: 9,
				},{
					name: "6th_year_6",
					col: "AE",
					row: 9,
				},{
					name: "7th_year_m",
					col: "AF",
					row: 9,
				},{
					name: "7th_year_f",
					col: "AG",
					row: 9,
				},{
					name: "total_m",
					col: "AH",
					row: 9,
				},{
					name: "total_f",
					col: "AI",
					row: 9,
				},{
					name: "total",
					col: "AJ",
					row: 9,
				},{
					name: "enrolled_units_lecture",
					col: "AK",
					row: 9,
				},{
					name: "enrolled_units_lab",
					col: "AL",
					row: 9,
				},{
					name: "enrolled_units_total",
					col: "AM",
					row: 9,
				},{
					name: "graduates_m",
					col: "AN",
					row: 9,
				},{
					name: "graduates_f",
					col: "AO",
					row: 9,
				},{
					name: "graduates_total",
					col: "AP",
					row: 9,
				},{
					name: "external_scholars",
					col: "AQ",
					row: 9,
				},{
					name: "internal_scholars",
					col: "AR",
					row: 9,
				}
			],
			row_count: -1 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
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

		  let doctoral = this.generateFromRow(workbook.Sheets["Doctoral"],this.state.FORM);
		  let masters = this.generateFromRow(workbook.Sheets["Masters"],this.state.FORM);
		  let post_baccalaureate = this.generateFromRow(workbook.Sheets["Post-Baccalaureate"],this.state.FORM);
		  let baccalaureate = this.generateFromRow(workbook.Sheets["Baccalaureate"],this.state.FORM);
		  let pre_baccalaureate = this.generateFromRow(workbook.Sheets["Pre-Baccalaureate"],this.state.FORM);
		  let voc_tech = this.generateFromRow(workbook.Sheets["VocTech"],this.state.FORM);
		  let basic = this.generateFromRow(workbook.Sheets["Basic"],this.state.FORM);

		  //console.log(profile)

		  let format_data = Object.assign({},{
	  		doctoral,
	  		masters,
	  		post_baccalaureate,
	  		baccalaureate,
	  		pre_baccalaureate,
	  		voc_tech,
	  		basic
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