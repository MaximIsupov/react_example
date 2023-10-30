import './Process.css'
import BlockMark from '../../../components/block_mark/BlockMark.jsx'
import ProcessStep from './ProcessStep.jsx'
import ProcessLeft from './ProcessLeft.jsx'
import ProcessRight from './ProcessRight.jsx'


function Process(){
	return(
		<div className="process container">
			<ProcessLeft />
			<ProcessRight />
		</div>
	)
}

export default Process;