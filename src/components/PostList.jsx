import { Link } from 'react-router-dom';

const PostList = ({blogs}) => {

	return ( 
		<div className="post-lists">
			{blogs.map(blog => (
				<div className="post-list" key={blog.id}>
					<Link to={`/post/${blog.id}`}>
						<h3>{blog.title}</h3>
						<p>{blog.body}</p>
					</Link>
				</div>
			))}
		</div>
	);
}

export default PostList;