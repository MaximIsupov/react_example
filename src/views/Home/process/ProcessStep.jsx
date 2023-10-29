function ProcessStep(props){
	return(
		<div className="process_step">
			<div className="process_step__number" style={{
				backgroundColor: props.backgroundColor,
				color: props.color
			}}>{ props.number }</div>
			<div className="process_step__content">
				<div className="process_step__title">{ props.title }</div>
				<div className="process_step__text">{ props.content }</div>
			</div>
		</div>
	)
}

export default ProcessStep;