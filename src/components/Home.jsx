import PostList from './PostList';
import DataFetch from '../utils/DataFetch';

const Home = () => {
  const {data: blogs, isPending, error} = DataFetch(process.env.REACT_APP_API_ENDPOINT + 'posts');

  return ( 
    <section className="container">
      <h1 className="page-title">Article Post</h1>
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        <PostList blogs={blogs} />
      </div>
    </section>
    );
}

export default Home;