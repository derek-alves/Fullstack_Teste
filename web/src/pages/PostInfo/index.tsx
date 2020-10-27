import React, { useEffect, useState,FormEvent, useCallback } from "react";
import url from "url";
import { FaLevelDownAlt } from "react-icons/fa";
import api from "../../services/api";
import CommentCard, { commentCardProps } from "../../components/CommentCard";
import Header from "../../components/Header";

import "./styles.css";

const PostInfo: React.FC = () => {
  const uurl = document.location.href;

  const sliceUrl = url.parse(uurl, true);

  const id = sliceUrl.pathname?.split("/")[2];


  const [post, setPost] = useState<any>([]);
  const [inputComent, setInputComment] = useState('');
  const [comment, setComment] = useState<any>([]);

  const getPostContent = useCallback(async ()=>{
   await api.get(`/posts/${id}`).then((response)=>{
      setPost(response.data);
    });
  },[]);

  const getComments = useCallback(async()=>{
    await api.get(`/posts/${id}/comments`).then((response)=>{
      setComment(response.data)
    }).catch((error)=>{
      console.log('error notification')
      return Promise.reject(error);
    });
  },[]);

  useEffect(() => {
    getPostContent();
    getComments();
  }, []);

   async function handleCreateComment(){
      const comment = inputComent;
     await api.post(`/posts/${id}/comments`,{
        comment
      }).then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log('error notification')
        return Promise.reject(error);
      })
      window.location.reload(true);
   }

  return (
    <form id="page-post-form" className="container" onSubmit={handleCreateComment}>
      <Header icon="FaAccusoft" title="Interaja com essa publicação!" />

      <main>
        <header>
          <div>
            <strong className="post_id">id: {post.id}</strong>
          </div>
        </header>
        <p className="content_post">{post.message}</p>

        <footer>
          <input 
          type="text"
           placeholder="Comente essa publicação"
           value={inputComent}
           onChange={(e)=>{setInputComment(e.target.value)}} 
           />
          <button type="submit">
            <FaLevelDownAlt />
            Comentar
          </button>
        </footer>

        <div className="comentarios">
          <h3>Comentários</h3>

          {comment.map((posts: commentCardProps) => {
            return (
              <CommentCard
                key={posts.id}
                id={posts.id}
                comment={posts.comment}
              />
            );
          })}
        </div>
      </main>
    </form>
  );
};

export default PostInfo;
