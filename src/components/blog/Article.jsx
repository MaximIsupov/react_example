function Article(props){
	return(
		<div className="article">
			<img className="article__img" src={ props.image } alt="article__image"/>
			<div className="article__title">{ props.title }</div>
			<div className="article__annotation">{ props.annotation }</div>
			<div className="article__bottom">
				<div className="article__author_img">
					<img src={ props.author_img } alt="author_image" />
				</div>
				<div className="article__author_name">{ props.author_name }</div>
				<div className="article__date">{ props.date }</div>
				<div className="btn article__btn">Read More</div>
			</div>
		</div>
	)
}

export default Article;