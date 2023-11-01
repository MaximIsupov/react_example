function ContactUsCard(props){
	return(
		<div className="contact_us__card">
			<div className="contact_us__card_image">
				<img src={ props.image } />
			</div>
			<div className="contact_us__card_content">
				<div className="contact_us__card_top">{ props.top }</div>
				<div className="contact_us__card_bottom">{ props.bottom }</div>
			</div>
		</div>
	)
}

export default ContactUsCard;