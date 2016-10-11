import React, { Component } from 'react';

class CSVParser extends Component{

	state = {
		filename: "00001040_SUC-NF-FORM-E1_2013.xls",
		FORM: {
			columns: [
				{
					name: "seq_no",
					col: "A",
					row: 8,
				},{
					name: "name",
					col: "B",
					row: 8,
				},{
					name: "faculty_rank",
					col: "C",
					row: 8,
				},{
					name: "home_college",
					col: "D",
					row: 8,
				},{
					name: "home_dept",
					col: "E",
					row: 8,
				},{
					name: "is_faculty_member_tenured",
					col: "F",
					row: 8,
				},{
					name: "ssl_salary_grade",
					col: "G",
					row: 8,
				},{
					name: "annual_basic_salary",
					col: "H",
					row: 8,
				},{
					name: "on_leave_without_pay",
					col: "I",
					row: 8,
				},{
					name: "fulltime_equivalent",
					col: "J",
					row: 8,
				},{
					name: "gender",
					col: "K",
					row: 8,
				},{
					name: "highest_degree_attained",
					col: "L",
					row: 8,
				},{
					name: "actively_pursuing_next_degree",
					col: "M",
					row: 8,
				},{
					name: "specific_discipline_1_of_primary_teaching_load",
					col: "N",
					row: 8,
				},{
					name: "specific_discipline_2_of_primary_teaching_load",
					col: "O",
					row: 8,
				},{
					name: "specific_discipline_of_bachelors_degree",
					col: "P",
					row: 8,
				},{
					name: "specific_discipline_of_masters_degree",
					col: "Q",
					row: 8,
				},{
					name: "specific_discipline_of_doctorate",
					col: "R",
					row: 8,
				},{
					name: "masters_degree_with_thesis",
					col: "S",
					row: 8,
				},{
					name: "doctorate_with_dissertation",
					col: "T",
					row: 8,
				},{
					name: "lab_hours_per_week",
					col: "U",
					row: 8,
				},{
					name: "lec_hours_per_week",
					col: "V",
					row: 8,
				},{
					name: "total_teaching_hours_per_week",
					col: "W",
					row: 8,
				},{
					name: "student_lab_contact_hours",
					col: "X",
					row: 8,
				},{
					name: "student_lec_contact_hours",
					col: "Y",
					row: 8,
				},{
					name: "student_total_contact_hours",
					col: "Z",
					row: 8,
				},{
					name: "lab_hours_per_week_voc",
					col: "AA",
					row: 8,
				},{
					name: "lac_hours_per_week_voc",
					col: "AB",
					row: 8,
				},{
					name: "total_teaching_hours_per_week_voc",
					col: "AC",
					row: 8,
				},{
					name: "student_lab_contact_hours_voc",
					col: "AD",
					row: 8,
				},{
					name: "student_lec_contact_hours_voc",
					col: "AE",
					row: 8,
				},{
					name: "student_total_contact_hours_voc",
					col: "AF",
					row: 8,
				},{
					name: "official_research_load",
					col: "AG",
					row: 8,
				},{
					name: "official_extension_services_load",
					col: "AH",
					row: 8,
				},{
					name: "official_study_load",
					col: "AI",
					row: 8,
				},{
					name: "official_load_for_production",
					col: "AJ",
					row: 8,
				},{
					name: "official_administrative_load",
					col: "AK",
					row: 8,
				},{
					name: "other_official_load_credits",
					col: "AL",
					row: 8,
				},{
					name: "total_work_load",
					col: "AM",
					row: 8,
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

		  let sucs_faculty = this.generateFromRow(workbook.Sheets["GROUP A1"],this.state.FORM);

		  //console.log(profile)

		  let format_data = Object.assign({},{
	  		sucs_faculty
		  });

		  console.log("Will Adjust for sheets?", format_data)

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