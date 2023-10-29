import BlockMark from '../../../components/block_mark/BlockMark.jsx'
import ProcessStep from './ProcessStep.jsx'

function ProcessLeft(){
	return(
		<div className="process__col">
			<BlockMark backgroundColor="#4EAF4E" color="white" title="PROCESS" />
			<div className="process__title">
				There have some easy steps to join with us!
			</div>
			<div className="process__content">
				Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
			</div>
			<div className="process__steps">
				<ProcessStep
				    backgroundColor='#FFCC4A'
				    color="black"
					number='1'
					title='Setup Account' 
					content='We understand the importance of approaching each work integrally.'
				/>
				<ProcessStep
					backgroundColor="#4EAF4E"
					color="white"
					number='1'
					title='Setup Account' 
					content='We understand the importance of approaching each work integrally.'
				/>
				<ProcessStep
					backgroundColor="black"
					color="white"
					number='1'
					title='Setup Account' 
					content='We understand the importance of approaching each work integrally.'
				/>
			</div>
		</div>
	)
}

export default ProcessLeft;