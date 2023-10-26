function AboutUsCard(props){

	return(
		<div className="about_us__card">
			<div className="about_us__card_row">
				<img src={props.icon} alt="smile_icon"/>
				<div className="about_us__card_title">{ props.number }</div>
			</div>
			<div className="about_us__card_row">
				<div className="about_us_card__content">{props.title}</div>
			</div>
		</div>
	)
}

export default AboutUsCard;