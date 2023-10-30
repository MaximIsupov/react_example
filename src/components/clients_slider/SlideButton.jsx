function SlideButton(props){
	return(
		<div className="btn_icon slider__btn" onClick={ props.onBtnClick }>
			<div className="slider__btn_icon">
				{ props.btnIcon }
			</div>
			{ props.title }
		</div>
	)
}

export default SlideButton;