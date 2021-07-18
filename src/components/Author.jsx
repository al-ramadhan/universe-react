import { useParams } from "react-router-dom";
import PostList from './PostList';
import UserDetail from "./UserDetail";
import DataFetch from '../utils/DataFetch';

const Author = () => {
  const { id } = useParams();
  const {data: articles, isPending, error} = DataFetch(process.env.REACT_APP_API_ENDPOINT + 'posts');
  const {data: user} = DataFetch(process.env.REACT_APP_API_ENDPOINT + 'users/' + id);

  // Get post by author
  const authorArticles = articles.filter(article => article.userId === parseInt(id));

  return ( 
    <section className="container">
      <h1 className="page-title">Article Post by : <UserDetail user={user} /></h1>
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        <PostList blogs={authorArticles } />
      </div>
    </section>
    );
}

export default Author;