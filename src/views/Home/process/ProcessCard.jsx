function ProcessCard(props){
	return(
		<div className="process__card">
			<img className="process__card_img" alt="process__card_image" src={ props.img } />
			<div className="process__card_title">{ props.title }</div>
			<div className="process__card_text">{ props.text }</div>
		</div>
	)
}

export default ProcessCard;