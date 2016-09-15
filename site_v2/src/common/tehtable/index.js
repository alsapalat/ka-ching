import React, { Component } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
	
import Dimensions from 'react-dimensions'

// eslint-disable-next-line
const Data = [{"id":7,"email":"company@email.com","photo":null,"department_id":1,"position_id":1,"created_by":1,"updated_by":1,"created_at":"08\/02\/2016 16:11:16","updated_at":"08\/02\/2016 16:11:16","time_logs_summary":[],"user_type":"Employee","has_time_log_in":false,"profile":{"first_name":"COMPANY","last_name":"ADMIN","address":"GHJK GHJK","contact_numbers":"234567 45678"},"department":{"id":1,"company_id":1,"name":"ADMIN","description":"ADMIN","created_by":1,"updated_by":1,"created_at":"08\/02\/2016 11:30:20","updated_at":"08\/02\/2016 11:30:20","deleted_at":null},"position":{"id":1,"company_id":1,"name":"ADMIN","description":"ADMIN","created_by":1,"updated_by":1,"created_at":"08\/02\/2016 11:30:28","updated_at":"08\/02\/2016 11:30:28","deleted_at":null},"timelogsfiltered":[]},{"id":8,"email":"employee@email.com","photo":null,"department_id":2,"position_id":2,"created_by":7,"updated_by":7,"created_at":"08\/02\/2016 16:14:07","updated_at":"08\/04\/2016 11:09:37","time_logs_summary":[{"date_ymd":"08\/02\/2016","time_in":"08\/02\/2016 16:14:30","time_out":"08\/02\/2016 17:57:44","total":1},{"date_ymd":"08\/03\/2016","time_in":"08\/03\/2016 15:54:37","time_out":"08\/03\/2016 17:12:54","total":1},{"date_ymd":"08\/04\/2016","time_in":"08\/04\/2016 09:13:00","time_out":"08\/04\/2016 23:03:46","total":13},{"date_ymd":"08\/05\/2016","time_in":"08\/05\/2016 10:31:44","time_out":"0000-00-00 00:00:00","total":"00:00:00"},{"date_ymd":"08\/15\/2016","time_in":"08\/15\/2016 14:08:55","time_out":"0000-00-00 00:00:00","total":"00:00:00"},{"date_ymd":"08\/12\/2016","time_in":"08\/12\/2016 15:03:26","time_out":"08\/12\/2016 15:03:28","total":0}],"user_type":"Employee","has_time_log_in":true,"profile":{"first_name":"EMPLOYEE","last_name":"USER","address":"gfhjkj fghgjk","contact_numbers":"12345678"},"department":{"id":2,"company_id":1,"name":"RND","description":"RND","created_by":null,"updated_by":null,"created_at":"08\/02\/2016 11:41:03","updated_at":"08\/02\/2016 11:41:03","deleted_at":null},"position":{"id":2,"company_id":1,"name":"DEVELOPER","description":"SR. DEVELOPER","created_by":7,"updated_by":7,"created_at":"08\/04\/2016 11:03:54","updated_at":"08\/04\/2016 11:05:06","deleted_at":null},"timelogsfiltered":[{"id":8,"type":"in","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.82 Safari\/537.36","ip_address":"::1","created_by":8,"updated_by":8,"created_at":"08\/02\/2016 16:14:30","updated_at":"08\/02\/2016 16:14:30","deleted_at":null,"human_log":"Tue, Aug 2, 2016 4:14 PM"},{"id":15,"type":"out","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.82 Safari\/537.36","ip_address":"::1","created_by":8,"updated_by":8,"created_at":"08\/02\/2016 17:57:44","updated_at":"08\/02\/2016 17:57:44","deleted_at":null,"human_log":"Tue, Aug 2, 2016 5:57 PM"},{"id":16,"type":"in","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.82 Safari\/537.36","ip_address":"127.0.0.1","created_by":8,"updated_by":8,"created_at":"08\/03\/2016 15:54:37","updated_at":"08\/03\/2016 15:54:37","deleted_at":null,"human_log":"Wed, Aug 3, 2016 3:54 PM"},{"id":29,"type":"out","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.82 Safari\/537.36","ip_address":"127.0.0.1","created_by":8,"updated_by":8,"created_at":"08\/03\/2016 17:12:54","updated_at":"08\/03\/2016 17:12:54","deleted_at":null,"human_log":"Wed, Aug 3, 2016 5:12 PM"},{"id":31,"type":"in","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.82 Safari\/537.36","ip_address":"127.0.0.1","created_by":8,"updated_by":8,"created_at":"08\/04\/2016 09:13:00","updated_at":"08\/03\/2016 17:13:00","deleted_at":null,"human_log":"Thu, Aug 4, 2016 9:13 AM"},{"id":34,"type":"out","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.82 Safari\/537.36","ip_address":"127.0.0.1","created_by":8,"updated_by":8,"created_at":"08\/04\/2016 23:03:46","updated_at":"08\/04\/2016 10:03:46","deleted_at":null,"human_log":"Thu, Aug 4, 2016 11:03 PM"},{"id":35,"type":"in","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.82 Safari\/537.36","ip_address":"127.0.0.1","created_by":8,"updated_by":8,"created_at":"08\/05\/2016 10:31:44","updated_at":"08\/05\/2016 10:31:44","deleted_at":null,"human_log":"Fri, Aug 5, 2016 10:31 AM"},{"id":52,"type":"in","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.116 Safari\/537.36","ip_address":"127.0.0.1","created_by":8,"updated_by":8,"created_at":"08\/15\/2016 14:08:55","updated_at":"08\/15\/2016 14:08:55","deleted_at":null,"human_log":"Mon, Aug 15, 2016 2:08 PM"},{"id":70,"type":"in","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.116 Safari\/537.36","ip_address":"127.0.0.1","created_by":8,"updated_by":8,"created_at":"08\/12\/2016 15:03:26","updated_at":"08\/12\/2016 15:03:26","deleted_at":null,"human_log":"Fri, Aug 12, 2016 3:03 PM"},{"id":71,"type":"out","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.116 Safari\/537.36","ip_address":"127.0.0.1","created_by":8,"updated_by":8,"created_at":"08\/12\/2016 15:03:28","updated_at":"08\/12\/2016 15:03:28","deleted_at":null,"human_log":"Fri, Aug 12, 2016 3:03 PM"},{"id":91,"type":"out","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.116 Safari\/537.36","ip_address":"127.0.0.1","created_by":8,"updated_by":8,"created_at":"08\/15\/2016 14:55:30","updated_at":"08\/15\/2016 14:55:30","deleted_at":null,"human_log":"Mon, Aug 15, 2016 2:55 PM"}]},{"id":9,"email":"employee1@email.com","photo":null,"department_id":2,"position_id":2,"created_by":7,"updated_by":7,"created_at":"08\/05\/2016 16:24:41","updated_at":"08\/05\/2016 16:24:42","time_logs_summary":[{"date_ymd":"08\/15\/2016","time_in":"08\/15\/2016 11:32:53","time_out":"08\/15\/2016 11:33:01","total":0}],"user_type":"Employee","has_time_log_in":true,"profile":{"first_name":"Employee","last_name":"Developer","address":"idfghjk   fghjkl ","contact_numbers":"2345 789"},"department":{"id":2,"company_id":1,"name":"RND","description":"RND","created_by":null,"updated_by":null,"created_at":"08\/02\/2016 11:41:03","updated_at":"08\/02\/2016 11:41:03","deleted_at":null},"position":{"id":2,"company_id":1,"name":"DEVELOPER","description":"SR. DEVELOPER","created_by":7,"updated_by":7,"created_at":"08\/04\/2016 11:03:54","updated_at":"08\/04\/2016 11:05:06","deleted_at":null},"timelogsfiltered":[{"id":44,"type":"in","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.116 Safari\/537.36","ip_address":"127.0.0.1","created_by":9,"updated_by":9,"created_at":"08\/15\/2016 11:32:53","updated_at":"08\/15\/2016 11:32:53","deleted_at":null,"human_log":"Mon, Aug 15, 2016 11:32 AM"},{"id":47,"type":"out","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.116 Safari\/537.36","ip_address":"127.0.0.1","created_by":9,"updated_by":9,"created_at":"08\/15\/2016 11:33:01","updated_at":"08\/15\/2016 11:33:01","deleted_at":null,"human_log":"Mon, Aug 15, 2016 11:33 AM"}]},{"id":10,"email":"employee2@email.com","photo":null,"department_id":2,"position_id":1,"created_by":7,"updated_by":7,"created_at":"08\/15\/2016 11:35:03","updated_at":"08\/15\/2016 11:35:03","time_logs_summary":[{"date_ymd":"08\/12\/2016","time_in":"08\/12\/2016 15:03:26","time_out":"0000-00-00 00:00:00","total":"00:00:00"},{"date_ymd":"08\/15\/2016","time_in":"08\/15\/2016 11:32:07","time_out":"08\/12\/2016 15:03:32","total":68}],"user_type":"Employee","has_time_log_in":true,"profile":{"first_name":"employee2","last_name":"employee2","address":"yghjasdblfkjh aksflaj","contact_numbers":"3456789"},"department":{"id":2,"company_id":1,"name":"RND","description":"RND","created_by":null,"updated_by":null,"created_at":"08\/02\/2016 11:41:03","updated_at":"08\/02\/2016 11:41:03","deleted_at":null},"position":{"id":1,"company_id":1,"name":"ADMIN","description":"ADMIN","created_by":1,"updated_by":1,"created_at":"08\/02\/2016 11:30:28","updated_at":"08\/02\/2016 11:30:28","deleted_at":null},"timelogsfiltered":[{"id":36,"type":"in","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.116 Safari\/537.36","ip_address":"127.0.0.1","created_by":10,"updated_by":10,"created_at":"08\/12\/2016 15:03:26","updated_at":"08\/12\/2016 15:03:26","deleted_at":null,"human_log":"Fri, Aug 12, 2016 3:03 PM"},{"id":42,"type":"in","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.116 Safari\/537.36","ip_address":"127.0.0.1","created_by":10,"updated_by":10,"created_at":"08\/15\/2016 11:32:07","updated_at":"08\/15\/2016 11:32:07","deleted_at":null,"human_log":"Mon, Aug 15, 2016 11:32 AM"},{"id":73,"type":"out","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.116 Safari\/537.36","ip_address":"127.0.0.1","created_by":10,"updated_by":10,"created_at":"08\/12\/2016 15:03:32","updated_at":"08\/12\/2016 15:03:32","deleted_at":null,"human_log":"Fri, Aug 12, 2016 3:03 PM"},{"id":95,"type":"out","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/52.0.2743.116 Safari\/537.36","ip_address":"127.0.0.1","created_by":10,"updated_by":10,"created_at":"08\/15\/2016 14:56:31","updated_at":"08\/15\/2016 14:56:31","deleted_at":null,"human_log":"Mon, Aug 15, 2016 2:56 PM"}]}]

class TehTable extends Component{
	render(){

		const data = Data;

		console.log(data);

		return(
			<div>
				<Table
					rowsCount={data.length}
					rowHeight={50}
					width={this.getWidth()}
					height={400}
					headerHeight={50}
					>
					<Column
						header={
							<Cell>Name</Cell>
						}
						width={this.getWidth(30, 150, 300)}
						cell={props=>{
							const { rowIndex } = props;

							const { first_name, last_name } = data[rowIndex].profile;

							return(
								<Cell {...props}>
									<span>{last_name}, {first_name}</span>
								</Cell>
							)
						}}
						/>

					{this.getTimeInColumn(data)}

				</Table>

			</div>
		)
	}

	getWidth(percentage = 100, min, max){
		let width = (this.props.containerWidth * (percentage * 0.01));
		if(min)
			return (width < min) ? min : width;
		if(max)
			return (width) > max ? max : width;
		return width;
	}

	getTimeLogSummaryDays = (data) => {
		let days = [];
		data.map((users) => {
			users.time_logs_summary.map((logs) =>{
				if(days.indexOf(logs.date_ymd) === -1)
					days.push(logs.date_ymd);
				return null;
			})
			return null;
		})
		return days;
	}

	getTimeInColumn = (data) => {		
		const days = this.getTimeLogSummaryDays(data);
		
		return days.map((day) => {
			return(
				<Column
					key={day}
					header={
						<Cell>{day}</Cell>
					}
					width={this.getWidth(70 / days.length, 100)}
					cell={props=>{
						const { rowIndex } = props;

						const { time_logs_summary } = data[rowIndex]

						const record = this.inList(time_logs_summary, "date_ymd", day);
						if(typeof record === "object")
							return(
								<Cell {...props}>
									{record.time_in}
								</Cell>
							)

						return(
								<Cell {...props}>
									--
								</Cell>
							)
					}}
				/>
			)
		})
	}

	inList(list, key, find){
		let data = -1;
		list.map((item) => {
			if(item[key].toLowerCase() === find.toLowerCase())
				data = item
			return null;
		})
		return data;
	}
} 

// eslint-disable-next-line
export default Dimensions()(TehTable)


