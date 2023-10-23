import './Header.css'
import HeaderTop from './HeaderTop.jsx'
import HeaderBottom from './HeaderBottom.jsx'

function Header() {
	return(
		<div className="header">
			<HeaderTop />
			<HeaderBottom />
		</div>
	);
}

export default Header;