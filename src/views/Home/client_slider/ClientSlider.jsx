import BlockMark from '../../../components/block_mark/BlockMark.jsx'
import './ClientSlider.css'
import Slider from '../../../components/clients_slider/Slider.jsx'

function ClientSlider(){
	return(
		<div className="client_slider container">
			<BlockMark backgroundColor="#4EAF4E" color="white" title="Client Feedback" />
			<div className="client_slider__title">“Lorem ipsum dolor sit amet, consectetur <snap style={{
				color: 'black'
			}}>adipiscing elit, sed do eiusmod</snap> tempor incididunt ut labore et dolore”</div>
			<Slider />
		</div>
	)
}

export default ClientSlider;
