import Article from './Article.jsx'
import './Blog.css'

function Blog(props){
	const articlesElements = props.articles.map((article)=>
		<Article key={ article.id }
			image={ article.image }
			title={ article.title }
			annotation={ article.annotation }
			author_img={ article.author_img }
			author_name={ article.author_name }
			date={ article.date }
		/>
	);

	return(
		<div className="blog">
			{ articlesElements }
		</div>
	)
}

export default Blog;