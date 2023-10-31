import Header from '../../components/header/Header.jsx'
import Banner from './banner/Banner.jsx'
import Partners from './partners/Partners.jsx'
import AboutUs from './about_us/AboutUs.jsx'
import Advantages from './advantages/Advantages.jsx'
import Process from './process/Process.jsx'
import ProcessGalery from './process_gallery/ProcessGallery.jsx'
import ClientSlider from './client_slider/ClientSlider.jsx'
import BookBanner from './book_banner/BookBanner.jsx'

function Home(){
	return(

		<div>
			<Header />
			<Banner />
			<Partners />
			<AboutUs />
			<Advantages />
			<Process />
			<ProcessGalery />
			<ClientSlider />
			<BookBanner />
		</div>
	)
}

export default Home;