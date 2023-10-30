import { useState } from 'react';

function GalleryCard(props){

	const [opacity, setOpacity] = useState('0');

	return(
		<div className="gallery_card" 
			style={{
				backgroundImage: `url(${props.image})`
			}}
			onMouseEnter={() => setOpacity('1')}
	        onMouseLeave={() => setOpacity('0')}
	    >
			<div className="gallery_card__overlay" style={{
				opacity: opacity
			}}>
				<div className="gallery_card__title">{ props.title }</div>
				<div className="gallery_card__text">{ props.text }</div>
			</div>
		</div>
	)
}

export default GalleryCard;