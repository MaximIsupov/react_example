import './BlogBlock.css'
import BlockMark from '../../../components/block_mark/BlockMark.jsx'
import Blog from '../../../components/blog/Blog.jsx'
import { articles } from '../../../utils/articles.jsx'

function BlogBlock(){

	const lastArticles = articles.slice(0, 2);

	return(
		<div className="blog_block container">
			<BlockMark backgroundColor="#4EAF4E" color="white" title="Blog" />
			<div className="blog_block__top">
				<div className="blog_block__title">Take a look at our latest articles & resources</div>
				<div className="blog_block__btn btn">More News</div>
			</div>
			<Blog articles={ lastArticles }/>
		</div>
	)
}

export default BlogBlock;