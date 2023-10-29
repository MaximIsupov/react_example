import BlockMark from '../../../components/block_mark/BlockMark.jsx'
import ProcessCard from './ProcessCard.jsx'

function ProcessRight(){
	return(
		<div className="process__col">
			<BlockMark backgroundColor="#FFCC4A" color="black" title="Growing with our clients" />
			<div className="process__title">
				30 Years of Experience
			</div>
			<div className="process__content">
				Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.<br />
				Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
			</div>
			<div className="process__cards">
				<ProcessCard 
					img="views/Home/process_icon_1.png"
					title="Consistency"
					text="Podcasting operational change management  workflow."
				/>
				<ProcessCard 
					img="views/Home/process_icon_2.png"
					title="Improvement"
					text="Podcasting operational change management  workflow."
				/>
				<ProcessCard 
					img="views/Home/process_icon_3.png"
					title="Branching"
					text="Podcasting operational change management  workflow."
				/>
				<ProcessCard 
					img="views/Home/process_icon_4.png"
					title="Company Growth"
					text="Podcasting operational change management  workflow."
				/>
			</div>
		</div>
	)
}

export default ProcessRight;