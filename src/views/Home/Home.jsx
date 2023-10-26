import Header from '../../components/header/Header.jsx'
import Banner from './banner/Banner.jsx'
import Partners from './partners/Partners.jsx'
import AboutUs from './about_us/AboutUs.jsx'

function Home(){
	return(

		<div>
			<Header />
			<Banner />
			<Partners />
			<AboutUs />
		</div>
	)
}

export default Home;