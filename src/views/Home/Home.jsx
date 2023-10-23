import Header from '../../components/header/Header.jsx'
import './Home.css'

function Home(){
	return(
		<div>
			<Header />
			<div className="banner">
				<div className="banner_card">
					<div className="banner_card__title">
						Your small business growth advisors
					</div>
					<div className="banner_card__text">
						Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.
					</div>
					<div className="banner_card__buttons">
						<div class="btn banner_card__btn">
							Our services
						</div>
						<div className="btn_icon banner_card__btn_icon">
							<div className="btn__icon">
								<img src="views/Home/calendar_icon.png" />
							</div>
							Book a Meeting
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;