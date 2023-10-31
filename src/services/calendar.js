export function setCalendar(date){
	let calendarBody = document.getElementById('calendar__body');
	calendarBody.innerHTML = '';

	function setToMonday( date ) {
	    var day = date.getDay() || 7;  
	    if( day !== 1 ) 
	        date.setHours(-24 * (day - 1)); 
	    return date;
	}
	
	let current_date = new Date(date);
	let current_month = current_date.getMonth();
	let y = current_date.getYear();
	let m = current_month;
	var firstDay = new Date(y, m, 1);
	var lastDay = new Date(y, m + 1, 0);
	let first_day_of_week = firstDay.getDay();
	if (first_day_of_week == 0){
		first_day_of_week = 6;
	}
	else{
		first_day_of_week += 1;
	}
	let total_amount_of_days = first_day_of_week + lastDay.getDate();
	let total_amount_of_rows = Math.floor(total_amount_of_days / 7) + 1;
	let current_day_of_week = current_date.getDay();
	let current_day = new Date(setToMonday(firstDay));
	current_day.setDate(current_day.getDate() - 2);
	for (let i=0; i<total_amount_of_rows;i++){
		let row = document.createElement('tr');
		row.className = 'calendar__body_row';
		for (let j=0; j<7; j++){
			let cell = document.createElement('td');
			if (current_month != current_day.getMonth()){
				cell.className="cell_inactive";
			}
			cell.innerHTML = current_day.getDate();
			row.append(cell);
			current_day.setDate(current_day.getDate() + 1);
		}
		calendarBody.append(row);
	}
}