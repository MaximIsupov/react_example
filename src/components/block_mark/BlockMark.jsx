import './BlockMark.css'

function BlockMark(props){

	const backgroundColor = props.backgroundColor;
	const color = props.color;

	return(
		<div className="block_mark" style={{backgroundColor: backgroundColor, color: color}}>
			{ props.title }
		</div>
	)
}

export default BlockMark;