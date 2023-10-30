function Slide(props){
	return(
		<div className="slide">
			<div className="slide__image">
				<img src={ props.image } alt="slider_image"/>
			</div>
			<div className="slide__full_name">{ props.full_name }</div>
			<div className="slide__title">{ props.title }</div>
		</div>
	)
}

export default Slide;