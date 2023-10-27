function AdvantagesCard(props){
	return(
		<div className="advantages__card">
			<img src={props.img} alt="advantages__card_title" />
			<div className="advantages__card_title">{ props.title }</div>
			<div className="advantages__card_content">{ props.content }</div>
		</div>
	);
}

export default AdvantagesCard;