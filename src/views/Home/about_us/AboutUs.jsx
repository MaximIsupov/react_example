import './AboutUs.css'
import BlockMark from '../../../components/block_mark/BlockMark.jsx'
import AboutUsCard from './AboutUsCard.jsx'

function AboutUs(){
	return(
		<div className="about_us">
			<div className="about_us__col about_us__col_left">
				<BlockMark backgroundColor="#FFCC4A" color="black" title="ABOUT US" />
				<div className="about_us__title">
					About our Consuting Agency Team
				</div>
				<div className="about_us__text">
					We create experiences and build products that make business grow
				</div>
				<div className="about_us__small_text">
					Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.
				</div>
				<div className="about_us__cards">
					<AboutUsCard 
						title = 'Business Services'
						number = '400+'
						icon = 'views/Home/star.png'
					/>
					<div className="about_us__cards_divider">ㅤ</div>
					<AboutUsCard 
						title = 'Happy Customer'
						number = '100+'
						icon = 'views/Home/smile.png'
					/>
				</div>
			</div>
			<div className="about_us__col">
				<img className="about_us__banner" src="views/Home/about_us_banner.png" alt="about_us_banner" />
			</div>
		</div>
	)
}

export default AboutUs;