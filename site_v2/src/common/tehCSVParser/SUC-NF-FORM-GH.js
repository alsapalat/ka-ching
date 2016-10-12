import React, { Component } from 'react';

class CSVParser extends Component{

	state = {
		filename: "00001040SUC-NF-FORM-GH_2013.xls",
		G1_PROFILE: [
			{
				custom_name: 'suc',
				column: "C3",	
				value: "D3"	
			},{
				custom_name: 'campus',
				column: "C4",	
				value: "D4"	
			},{
				custom_name: 'fund_101_ps_total',
				column: "B23",	
				value: "D23"	
			},{
				custom_name: 'fund_101_mooe_total',
				column: "B23",	
				value: "E23"	
			},{
				custom_name: 'fund_101_co_total',
				column: "B23",	
				value: "F23"	
			},{
				custom_name: 'fund_101_total',
				column: "B23",	
				value: "G23"	
			},{
				custom_name: 'fund_164_ps_total',
				column: "B23",	
				value: "I23"	
			},{
				custom_name: 'fund_164_mooe_total',
				column: "B23",	
				value: "J23"	
			},{
				custom_name: 'fund_164_co_total',
				column: "B23",	
				value: "K23"	
			},{
				custom_name: 'fund_164_total',
				column: "B23",	
				value: "L23"	
			},{
				custom_name: 'fund_grand_ps_total',
				column: "B23",	
				value: "N23"	
			},{
				custom_name: 'fund_grand_mooe_total',
				column: "B23",	
				value: "O23"	
			},{
				custom_name: 'fund_grand_co_total',
				column: "B23",	
				value: "P23"	
			},{
				custom_name: 'fund_grand_total',
				column: "B23",	
				value: "Q23"	
			},{
				custom_name: 'original_data_supplied_by',
				column: "C28",	
				value: "E28"	
			},{
				custom_name: 'data_keyed_in_by',
				column: "C29",	
				value: "E29"	
			},{
				custom_name: 'certified_correct_by',
				column: "C30",	
				value: "E30"	
			},{
				custom_name: 'remarks',
				column: "B25",	
				value: "C25"	
			}
		],
		G1_FUNCTION_TEMPLATE: {
			columns: [
				{
					name: "no",
					col: "A",
					row: 11,
				},{
					name: "function",
					col: "B",
					row: 11,
				},{
					name: "fund_101_ps",
					col: "D",
					row: 11,
				},{
					name: "fund_101_mooe",
					col: "E",
					row: 11,
				},{
					name: "fund_101_co",
					col: "F",
					row: 11,
				},{
					name: "fund_101_total",
					col: "G",
					row: 11,
				},{
					name: "fund_164_ps",
					col: "I",
					row: 11,
				},{
					name: "fund_164_mooe",
					col: "J",
					row: 11,
				},{
					name: "fund_164_co",
					col: "K",
					row: 11,
				},{
					name: "fund_164_total",
					col: "L",
					row: 11,
				},{
					name: "fund_grand_ps_total",
					col: "N",
					row: 11,
				},{
					name: "fund_grand_mooe_total",
					col: "O",
					row: 11,
				},{
					name: "fund_grand_co_total",
					col: "P",
					row: 11,
				},{
					name: "fund_grand_total",
					col: "Q",
					row: 11,
				}
			],
			row_count: 4 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
		},
		G1_FUNCTION_OTHER_TEMPLATE: {
			columns: [
				{
					name: "no",
					col: "B",
					row: 16,
				},{
					name: "function",
					col: "C",
					row: 16,
				},{
					name: "fund_101_ps",
					col: "D",
					row: 16,
				},{
					name: "fund_101_mooe",
					col: "E",
					row: 16,
				},{
					name: "fund_101_co",
					col: "F",
					row: 16,
				},{
					name: "fund_101_total",
					col: "G",
					row: 16,
				},{
					name: "fund_164_ps",
					col: "I",
					row: 16,
				},{
					name: "fund_164_mooe",
					col: "J",
					row: 16,
				},{
					name: "fund_164_co",
					col: "K",
					row: 16,
				},{
					name: "fund_164_total",
					col: "L",
					row: 16,
				},{
					name: "fund_grand_ps_total",
					col: "N",
					row: 16,
				},{
					name: "fund_grand_mooe_total",
					col: "O",
					row: 16,
				},{
					name: "fund_grand_co_total",
					col: "P",
					row: 16,
				},{
					name: "fund_grand_total",
					col: "Q",
					row: 16,
				}
			],
			row_count: 3 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
		},

		G2_PROFILE: [
			{
				custom_name: 'suc',
				column: "C3",	
				value: "D3"	
			},{
				custom_name: 'campus',
				column: "C4",	
				value: "D4"	
			},{
				custom_name: 'fund_101_ps_total',
				column: "B51",	
				value: "D51"	
			},{
				custom_name: 'fund_101_mooe_total',
				column: "B51",	
				value: "E51"	
			},{
				custom_name: 'fund_101_co_total',
				column: "B51",	
				value: "F51"	
			},{
				custom_name: 'fund_101_total',
				column: "B51",	
				value: "G51"	
			},{
				custom_name: 'fund_164_ps_total',
				column: "B51",	
				value: "I51"	
			},{
				custom_name: 'fund_164_mooe_total',
				column: "B51",	
				value: "J51"	
			},{
				custom_name: 'fund_164_co_total',
				column: "B51",	
				value: "K51"	
			},{
				custom_name: 'fund_164_total',
				column: "B51",	
				value: "L51"	
			},{
				custom_name: 'fund_grand_ps_total',
				column: "B51",	
				value: "N51"	
			},{
				custom_name: 'fund_grand_mooe_total',
				column: "B51",	
				value: "O51"	
			},{
				custom_name: 'fund_grand_co_total',
				column: "B51",	
				value: "P51"	
			},{
				custom_name: 'fund_grand_total',
				column: "B51",	
				value: "Q51"	
			},{
				custom_name: 'original_data_supplied_by',
				column: "C55",	
				value: "E55"	
			},{
				custom_name: 'data_keyed_in_by',
				column: "C56",	
				value: "E56"	
			},{
				custom_name: 'certified_correct_by',
				column: "C57",	
				value: "E57"	
			}
		],
		G2_FUNCTION_TEMPLATE: {
			columns: [
				{
					name: "no",
					col: "A",
					row: 40,
				},{
					name: "function",
					col: "B",
					row: 40,
				},{
					name: "fund_101_ps",
					col: "D",
					row: 40,
				},{
					name: "fund_101_mooe",
					col: "E",
					row: 40,
				},{
					name: "fund_101_co",
					col: "F",
					row: 40,
				},{
					name: "fund_101_total",
					col: "G",
					row: 40,
				},{
					name: "fund_164_ps",
					col: "I",
					row: 40,
				},{
					name: "fund_164_mooe",
					col: "J",
					row: 40,
				},{
					name: "fund_164_co",
					col: "K",
					row: 40,
				},{
					name: "fund_164_total",
					col: "L",
					row: 40,
				},{
					name: "fund_grand_ps_total",
					col: "N",
					row: 40,
				},{
					name: "fund_grand_mooe_total",
					col: "O",
					row: 40,
				},{
					name: "fund_grand_co_total",
					col: "P",
					row: 40,
				},{
					name: "fund_grand_total",
					col: "Q",
					row: 40,
				}
			],
			row_count: 4 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
		},
		G2_FUNCTION_OTHER_TEMPLATE: {
			columns: [
				{
					name: "no",
					col: "B",
					row: 45,
				},{
					name: "function",
					col: "C",
					row: 45,
				},{
					name: "fund_101_ps",
					col: "D",
					row: 45,
				},{
					name: "fund_101_mooe",
					col: "E",
					row: 45,
				},{
					name: "fund_101_co",
					col: "F",
					row: 45,
				},{
					name: "fund_101_total",
					col: "G",
					row: 45,
				},{
					name: "fund_164_ps",
					col: "I",
					row: 45,
				},{
					name: "fund_164_mooe",
					col: "J",
					row: 45,
				},{
					name: "fund_164_co",
					col: "K",
					row: 45,
				},{
					name: "fund_164_total",
					col: "L",
					row: 45,
				},{
					name: "fund_grand_ps_total",
					col: "N",
					row: 45,
				},{
					name: "fund_grand_mooe_total",
					col: "O",
					row: 45,
				},{
					name: "fund_grand_co_total",
					col: "P",
					row: 45,
				},{
					name: "fund_grand_total",
					col: "Q",
					row: 45,
				}
			],
			row_count: 3 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
		},
		H_STATEMENT_OF_INCOME:[
			{
				custom_name: 'tuition_and_misc_fee',
				column: "A93",	
				value: "D93"	
			},{
				custom_name: 'miscellaneous',
				column: "A93",	
				value: "E93"	
			},{
				custom_name: 'other_income',
				column: "A93",	
				value: "F93"	
			},{
				custom_name: 'total_suc_income',
				column: "A93",	
				value: "G93"	
			},{
				custom_name: 'remarks',
				column: "B96",	
				value: "C96"	
			},{
				custom_name: 'original_data_supplied_by',
				column: "B99",	
				value: "D99"	
			},{
				custom_name: 'data_keyed_in_by',
				column: "B100",	
				value: "D100"	
			},{
				custom_name: 'certified_correct_by',
				column: "B101",	
				value: "D101"	
			}
		],
		H_SUC_CAMPUS: {
			columns: [
				{
					name: "no",
					col: "A",
					row: 67,
				},{
					name: "suc_campus",
					col: "C",
					row: 67,
				},{
					name: "tuition_and_misc_fee",
					col: "D",
					row: 67,
				},{
					name: "miscellaneous",
					col: "E",
					row: 67,
				},{
					name: "other_income",
					col: "F",
					row: 67,
				},{
					name: "total_suc_income",
					col: "G",
					row: 67,
				}
			],
			row_count: 18 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
		},
		H_SUC_CAMPUS_OTHER: {
			columns: [
				{
					name: "no",
					col: "B",
					row: 86,
				},{
					name: "suc_campus",
					col: "D",
					row: 86,
				},{
					name: "tuition_and_misc_fee",
					col: "D",
					row: 86,
				},{
					name: "miscellaneous",
					col: "E",
					row: 86,
				},{
					name: "other_income",
					col: "F",
					row: 86,
				},{
					name: "total_suc_income",
					col: "G",
					row: 86,
				}
			],
			row_count: 4 // if -1 = GO UNTIL ALL COLUMNS ARE UNDEFINED
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

		  let sheet = workbook.Sheets["allotment_per_campus"];

		  let G1_profile = this.generateInstitutionProfile(sheet,this.state.G1_PROFILE);
		  let G1_functions = this.generateFromRow(sheet,this.state.G1_FUNCTION_TEMPLATE);
		  let G1_function_other = this.generateFromRow(sheet,this.state.G1_FUNCTION_OTHER_TEMPLATE);
		  

		  let G2_profile = this.generateInstitutionProfile(sheet,this.state.G2_PROFILE);
		  let G2_functions = this.generateFromRow(sheet,this.state.G2_FUNCTION_TEMPLATE);
		  let G2_function_other = this.generateFromRow(sheet,this.state.G2_FUNCTION_OTHER_TEMPLATE);
		  //console.log(profile)

		  let H_statement_of_income = this.generateInstitutionProfile(sheet,this.state.H_STATEMENT_OF_INCOME);
		  let H_suc_campus = this.generateFromRow(sheet,this.state.H_SUC_CAMPUS);
		  let H_suc_campus_other = this.generateFromRow(sheet,this.state.H_SUC_CAMPUS_OTHER);

		  let format_data = Object.assign({},{
		  	form_g1_allotments: {
		  		...G1_profile,
		  		functions: G1_functions,
		  		function_other:G1_function_other
		  	},
		  	form_g2_expenditures: {
		  		...G2_profile,
		  		functions: {
		  			...G2_functions
		  		},
		  		function_other:{
		  			...G2_function_other
		  		}
		  	},
		  	form_h_statement_of_income:{
		  		...H_statement_of_income,
		  		suc_campus:H_suc_campus,
		  		suc_campus_other: H_suc_campus_other
		  	}
		  });

		  console.log(format_data)

		  this.setState({
		  	json: JSON.stringify(format_data)
		  })

		  /* DO SOMETHING WITH workbook HERE */
		}

		oReq.send();
	}

	generateInstitutionProfile = (src,fields) => {
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