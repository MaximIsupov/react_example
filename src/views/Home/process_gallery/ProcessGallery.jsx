import './ProcessGallery.css'
import BlockMark from '../../../components/block_mark/BlockMark.jsx'
import { Link } from "react-router-dom"
import GalleryCard from './GalleryCard.jsx'
import Numbers from '../../../components/numbers/Numbers.jsx'

function ProcessGallery(){
	return(
		<div className="process_gallery">
			<BlockMark backgroundColor="#4EAF4E" color="white" title="Process" />
			<div className="process_gallery__top">
				<div className="process_gallery__title">Our client, global analytical techno company, wanted to build market.</div>
				<Link to="work" class="btn process_galery__btn">
					More Gallery
				</Link>
			</div>
			<div className="gallery">
				<GalleryCard
					image="views/Home/gallery_card_1.png"
					title="Taxes & Efficiency"
					text="Business"
				 />
				 <GalleryCard
					image="views/Home/gallery_card_2.png"
					title="Taxes & Efficiency"
					text="Business"
				 />
				 <GalleryCard
					image="views/Home/gallery_card_3.png"
					title="Taxes & Efficiency"
					text="Business"
				 />
				 <GalleryCard
					image="views/Home/gallery_card_4.png"
					title="Taxes & Efficiency"
					text="Business"
				 />
				 <GalleryCard
					image="views/Home/gallery_card_5.png"
					title="Taxes & Efficiency"
					text="Business"
				 />
				 <GalleryCard
					image="views/Home/gallery_card_6.png"
					title="Taxes & Efficiency"
					text="Business"
				 />
			</div>
			<Numbers />
		</div>
	)
}

export default ProcessGallery;