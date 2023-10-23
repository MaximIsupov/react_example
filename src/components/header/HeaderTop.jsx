import './Header.css'

function HeaderTop() {
	return(
		<div className="header_top">
			<div className="header_top__text">
				<img src="components/header/top_header__icon.png" />
				<snap style={{paddingLeft:10}}>Monday - Friday8AM - 9PM</snap>
			</div>
			<div className="header_top__text">
				<img src="components/header/header_icon_2.png" />
				<snap style={{paddingLeft:10}}>725 Park Ave, New York</snap>
			</div>
			<div className="header_top__links">
				<a href="#">
					<img src="components/header/linkedin.png" />
				</a>
				<a href="#">
					<img src="components/header/linkedin.png" />
				</a>
				<a href="#">
					<img src="components/header/linkedin.png" />
				</a>
				<a href="#">
					<img src="components/header/linkedin.png" />
				</a>
			</div>
		</div>
	)
}

export default HeaderTop;