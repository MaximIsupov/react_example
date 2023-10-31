import BlockMark from '../../../components/block_mark/BlockMark.jsx'
import './BookBanner.css'

function BookBanner(){
	return(
		<div className='book_banner'>
			<div className="col">
				<BlockMark backgroundColor="#4EAF4E" color="white" title="Book now" />
				<div className="book_banner__title">
					Better Consult, <snap style={{color:'#727272'}} >Better</snap> Results
				</div>
				<div className="book_banner__text">
					Our software development agency has a growth up to 30% per each year. If you are result-oriented, not afraid to take initiative – drop us a note and join our team!
				</div>
				<div className="book_banner__btn btn">
					<img src="components/header/header_btn__icon.png" alt="phone_icon" />
					<div className="book_banner__btn_phone">+800 1234 654 </div>
				</div>
			</div>
			<div className="col book_banner__background">
				<img src="views/Home/book_banner__image.png" alt="book_now__banner"/>
			</div>
		</div>
	)
}

export default BookBanner;