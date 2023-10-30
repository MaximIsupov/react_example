function Number(props){
	return(
		<div className="number">
			<div className="number__title">{ props.title }</div>
			<div className="number__text">{ props.text }</div>
		</div>
	)
}

export default Number;