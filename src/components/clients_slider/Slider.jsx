import { clients } from '../../utils/clients.jsx'
import Slide from './Slide.jsx'
import { useState, useEffect } from 'react'
import './Slider.css'
import SlideButton from './SlideButton.jsx'

function Slider(){

	const [slideIndex, setSlideIndex] = useState(0);
	const [slideData, setSlideData] = useState(clients[0]);
	const clientsLength = clients.length - 1;

	useEffect(() => {
		setSlideData(clients[slideIndex]);
	}, [slideIndex]);

	function getPrevSlide(){
		if (slideIndex != 0){
			setSlideIndex(slideIndex - 1);
		}
		else{
			setSlideIndex(clientsLength);
		}
	}

	function getNextSlide(){
		if (slideIndex == clientsLength){
			setSlideIndex(0);
		}
		else{
			setSlideIndex(slideIndex + 1);
		}
	}

	return(
		<div className="slider">
			<div className="slider__btn" onClick={ getPrevSlide }>
				<div className="slider__btn_icon">
					←
				</div>
				<div className="slider__btn_title">
					Prev
				</div>
			</div>
			<Slide 
				image = { slideData.image }
				full_name = { slideData.full_name }
				title = { slideData.title }
				next_slide = { getNextSlide }
				prev_slide = { getPrevSlide }
			/>
			<div className="slider__btn" onClick={ getNextSlide }>
				<div className="slider__btn_title">
					Next
				</div>
				<div className="slider__btn_icon">
					→
				</div>
			</div>
		</div>
	)
}

export default Slider;