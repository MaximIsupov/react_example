import { useState, useEffect } from 'react'
import './CalendarModal.css'
import { setCalendar } from '../../services/calendar.js'
import { MONTHES } from '../../utils/consts.jsx'
import Calendar from '../calendar/Calendar.jsx'

function CalendarModal(display){

	const [userFio, setUserFio] = useState('');

	return(
		<div className="overlay" style={display}>
			<div className="booking">
				<div className="close_arrow" onClick={display.onChange}>
					← Close
				</div>
				<div className="booking_body">
					<div className="booking_body__col">
						<div><label htmlFor="booking_name" className="booking__label">Full name</label></div>
						<input id="booking_name" type="text" placeholder="Full name" value={ userFio } onChange={event => setUserFio(event.target.value)}/>
					</div>
					<Calendar />
				</div>
			</div>
		</div>

	)
}

export default CalendarModal;