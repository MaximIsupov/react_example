import './Header.css'
import { Link } from "react-router-dom"

function HeaderBottom(){

	function Greeting(){
		console.log("Hello");
	}

	return(
		<div className="header_bottom">
			<div className="header_bottom__logo">
				<img src="logo.png" style={{paddingRight: 10}} />
				AskExperts
			</div>
			<div className="nav">
				<Link to='/' className="nav__item">
					Home
				</Link>
				<Link to='/pages' className="nav__item">
					Pages
				</Link>
				<Link to='/services' className="nav__item">
					Services
				</Link>
				<Link to="/work" className="nav__item">
					Work
				</Link>
				<Link to="/pages" className="nav__item">
					Pages
				</Link>
				<Link href="/contacts" className="nav__item">
					Contact
				</Link>
			</div>
			<div className="btn_icon header__btn" onClick={Greeting}>
				<div className="btn__icon">
					<img src="components/header/header_btn__icon.png" />
				</div>
				+ (888) 452 1505
			</div>
		</div>
	)
}

export default HeaderBottom;