import { MONTHES } from '../../utils/consts.jsx'
import { useState, useEffect } from 'react'
import { setCalendar } from '../../services/calendar.js'
import './Calendar.css'

function Calendar(){

	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		setCalendar(currentDate);
	}, [currentDate]);

	function changeMonth(difference){
		setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth()+difference)));
	}

	return(
		<div className="calendar booking_body__col">
			<div className="booking__label">Choose any free date</div><br />
			<div className="booking__label">{ MONTHES[currentDate.getMonth()] }, { currentDate.getFullYear() }</div> <br />
			<table>
				<thead className="calendar__head">
					<tr className="calendar__head_row">
						<td>Mon</td>
						<td>Tue</td>
						<td>Wed</td>
						<td>Thu</td>
						<td>Fri</td>
						<td>Sat</td>
						<td>Sun</td>
					</tr>
				</thead>
				<tbody id="calendar__body" className="calendar__body"></tbody>
			</table> <br />
			<div className="calendar__buttons">
				<div className="calendar__button" onClick={() => changeMonth(-1)}>
					←
				</div>
				<div className="calendar__button" onClick={() => changeMonth(1)}>
					→
				</div>
			</div>
		</div>
	)
}

export default Calendar;