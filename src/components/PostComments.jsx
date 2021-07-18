import { useParams } from 'react-router-dom';
import DataFetch from '../utils/DataFetch';

const PostComments = () => {
  const { id } = useParams();
  const { data: comments, error, isPending } =  DataFetch(process.env.REACT_APP_API_ENDPOINT + 'posts/'+ id +'/comments');

  return ( 
    <div className="comments">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <h3 className="comments-title">Comments ({comments.length})</h3>
      {comments.map(comment => (
        <div className="comments-list" key={comment.id}>
          <h4>{comment.name}</h4>
          <div>{comment.email}</div>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostComments;