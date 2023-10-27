import './Advantages.css'
import BlockMark from '../../../components/block_mark/BlockMark.jsx'
import AdvantagesCard from './AdvantagesCard.jsx'

function Advantages(){
	return(
		<div className="advantages">
			<div className="block_mark__wrapper">
				<BlockMark backgroundColor="#4EAF4E" color="white" title="SERVICES" />
			</div>
			<div className="advantages__title">
				Get Control Over Your Business I take your finance to next level
			</div>
			<div className="advantages__cards">
				<AdvantagesCard 
					img='views/Home/advantage_icon_1.png'
					title="Audit & Evaluation"
					content="Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
				/>
				<AdvantagesCard 
					img='views/Home/advantage_icon_2.png'
					title="Financial Projections"
					content="Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
				/>
				<AdvantagesCard 
					img='views/Home/advantage_icon_3.png'
					title="Funds and investments"
					content="Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
				/>
				<AdvantagesCard 
					img='views/Home/advantage_icon_4.png'
					title="Finance & Restructuring"
					content="Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
				/>
				<AdvantagesCard 
					img='views/Home/advantage_icon_5.png'
					title="Taxes & Efficiency"
					content="Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
				/>
				<AdvantagesCard 
					img='views/Home/advantage_icon_6.png'
					title="Investment banking"
					content="Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
				/>
			</div>
		</div>
	)
}

export default Advantages;