import React, { useEffect, useState } from "react";
import url from "url";
import { FaLevelDownAlt } from "react-icons/fa";
import api from "../../services/api";
import CommentCard, { commentCardProps } from "../../components/CommentCard";
import Header from "../../components/Header";

import "./styles.css";
import Axios from "axios";

const PostInfo: React.FC = () => {
  const [post, setPost] = useState<any>([]);
  const [comment, setComment] = useState<any>([]);

  useEffect(() => {
    const uurl = document.location.href;

    const sliceUrl = url.parse(uurl, true);

    const id = sliceUrl.pathname?.split("/")[2];

    const request = api.get(`/posts/${id}/comments`);
    const request2 = api.get(`/posts/${id}`);

    Axios.all([request, request2]).then(
      Axios.spread((...response) => {
        setPost(response[1].data);
        setComment(response[0].data);
      })
    );
  }, []);
  return (
    <form id="page-post-form" className="container">
      <Header icon="FaAccusoft" title="Interaja com essa publicação!" />

      <main>
        <header>
          <div>
            <strong className="post_id">id: {post.id}</strong>
          </div>
        </header>
        <p className="content_post">{post.message}</p>

        <footer>
          <input type="text" placeholder="Comente essa publicação" />
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
