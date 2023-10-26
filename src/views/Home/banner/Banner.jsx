import { useState } from 'react'
import './Banner.css'
import { Link } from "react-router-dom"
import CalendarModal from '../../../components/calendar_modal/CalendarModal.jsx'

function Banner(){

	const [showBookModal, setShowBookModal] = useState(false);
	const display = showBookModal ? 'block' : 'none';

	function toggleShowBookModal(){
		setShowBookModal(prevState => !prevState);
	}

	return(
		<div>
			<div className="banner">
				<div className="banner_card">
					<div className="banner_card__title">
						Your small business growth advisors
					</div>
					<div className="banner_card__text">
						Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.
					</div>
					<div className="banner_card__buttons">
						<Link to="/services" class="btn banner_card__btn">
							Our services
						</Link>
						<div className="btn_icon banner_card__btn_icon" onClick={toggleShowBookModal}>
							<div className="btn__icon">
								<img src="views/Home/calendar_icon.png" />
							</div>
							Book a Meeting
						</div>
					</div>
				</div>
			</div>
			<CalendarModal display={display} onChange={toggleShowBookModal} />
		</div>

	)
}

export default Banner;