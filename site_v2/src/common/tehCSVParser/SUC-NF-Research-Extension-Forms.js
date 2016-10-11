import React, { Component } from 'react';

class CSVParser extends Component{

	state = {
		filename: "00001040_SUC-NF-Research-Extension-Forms_2013.xls",
		RESEARCH_T_B1: {
			columns: [
				{
					name: "title",
					col: "A",
					row: 9,
				},{
					name: "keywords",
					col: "B",
					row: 9,
				},{
					name: "authors",
					col: "C",
					row: 9,
				},{
					name: "name_of_book_journal",
					col: "D",
					row: 9,
				},{
					name: "editors",
					col: "E",
					row: 9,
				},{
					name: "vol_issue_no",
					col: "F",
					row: 9,
				},{
					name: "no_of_pages",
					col: "G",
					row: 9,
				},{
					name: "year_of_publication",
					col: "H",
					row: 9,
				},{
					name: "type_of_publication",
					col: "I",
					row: 9,
				}
			],
			row_count: -1 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
		},
		RESEARCH_T_B2: {
			columns: [
				{
					name: "title",
					col: "A",
					row: 9,
				},{
					name: "keywords",
					col: "B",
					row: 9,
				},{
					name: "researchers",
					col: "C",
					row: 9,
				},{
					name: "presented_at_title",
					col: "D",
					row: 9,
				},{
					name: "presented_at_venue",
					col: "E",
					row: 9,
				},{
					name: "presented_at_date",
					col: "F",
					row: 9,
				},{
					name: "presented_at_organizer",
					col: "G",
					row: 9,
				},{
					name: "type_of_conference",
					col: "H",
					row: 9,
				}
			],
			row_count: -1 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
		},
		RESEARCH_T_B3: {
			columns: [
				{
					name: "inventions",
					col: "A",
					row: 9,
				},{
					name: "patent_number",
					col: "B",
					row: 9,
				},{
					name: "date_of_issue",
					col: "C",
					row: 9,
				},{
					name: "utilization_development",
					col: "D",
					row: 9,
				},{
					name: "utilization_service",
					col: "E",
					row: 9,
				},{
					name: "commercial_name",
					col: "F",
					row: 9,
				},{
					name: "points",
					col: "G",
					row: 9,
				}
			],
			row_count: -1 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
		},
		RESEARCH_T_B4: {
			columns: [
				{
					name: "title",
					col: "A",
					row: 9,
				},{
					name: "keywords",
					col: "B",
					row: 9,
				},{
					name: "researchers",
					col: "C",
					row: 9,
				},{
					name: "cited_by_authors",
					col: "D",
					row: 9,
				},{
					name: "cited_by_articles",
					col: "E",
					row: 9,
				},{
					name: "title_of_journal",
					col: "F",
					row: 9,
				},{
					name: "vol_issue_page_no",
					col: "G",
					row: 9,
				},{
					name: "city_year_published",
					col: "H",
					row: 9,
				},{
					name: "publisher",
					col: "I",
					row: 9,
				}
			],
			row_count: -1 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
		},
		RESEARCH_T_B5: {
			columns: [
				{
					name: "researcher",
					col: "A",
					row: 9,
				},{
					name: "title_of_research",
					col: "B",
					row: 9,
				},{
					name: "year_published_accepted_presented_received",
					col: "C",
					row: 9,
				},{
					name: "publisher_conference_organizer_conferring_body",
					col: "D",
					row: 9,
				}
			],
			row_count: -1 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
		},
		EXTENSION_T_C: {
			columns: [
				{
					name: "title",
					col: "A",
					row: 9,
				},{
					name: "keywords",
					col: "B",
					row: 9,
				},{
					name: "number_of_hours",
					col: "C",
					row: 9,
				},{
					name: "number_of_trainees_beneficiaries",
					col: "D",
					row: 9,
				},{
					name: "cited_by_title",
					col: "E",
					row: 9,
				},{
					name: "cited_by_conferring_agency_body",
					col: "F",
					row: 9,
				},{
					name: "cited_by_year_received",
					col: "G",
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

		  let research_tB1 = this.generateFromRow(workbook.Sheets["Research T-B1"],this.state.RESEARCH_T_B1);
		  let research_tB2 = this.generateFromRow(workbook.Sheets["Research T-B2"],this.state.RESEARCH_T_B2);
		  let research_tB3 = this.generateFromRow(workbook.Sheets["Research T-B3"],this.state.RESEARCH_T_B3);
		  let research_tB4 = this.generateFromRow(workbook.Sheets["Research T-B4"],this.state.RESEARCH_T_B4);
		  let research_tB5 = this.generateFromRow(workbook.Sheets["Research T-B5"],this.state.RESEARCH_T_B5);
		  let extension_tC = this.generateFromRow(workbook.Sheets["Research T-B1"],this.state.EXTENSION_T_C);

		  //console.log(profile)

		  let format_data = Object.assign({},{
	  		research_tB1,
			research_tB2,
			research_tB3,
			research_tB4,
			research_tB5,
			extension_tC
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