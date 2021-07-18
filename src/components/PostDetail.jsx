import { useState,useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import DataFetchChain from "../utils/DataFetchChain";
import PostComments from "./PostComments";
import UserDetail from "./UserDetail";
import "../styles/post.css";

const PostDetail = () => {
  const { id } = useParams();
  const { data: article, dataChain: user, error, isPending } =  DataFetchChain(process.env.REACT_APP_API_ENDPOINT + 'posts/' + id, process.env.REACT_APP_API_ENDPOINT + 'users/');
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    setUserDetail(user);
  },[user]);

  return ( 
    <>
      <section className="article">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        
        <div className="author-section">
          <div>Author : <UserDetail user={userDetail} /></div>
          <div className="btn-more-post">
            <Link to={`/author/${user.id}`}>
              More post from author &raquo;
            </Link>
          </div>
        </div>
      </section>

      <section className="container">
        <PostComments />
      </section>
    </>
  );
}

export default PostDetail;