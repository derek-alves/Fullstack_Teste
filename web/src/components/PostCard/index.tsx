import React from "react";
import { FaLevelUpAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles.css";

export interface Card {
    id: number;
    message: string;
}

const PostCard: React.FC<Card> = (props) => {
  return (
    <article className="post-item">
      <header>
        <div>
          <strong className="post-id">id: {props.id}</strong>
        </div>
      </header>
      <p>{props.message}</p>

      <footer>
        <p>
          <strong>Ver comentários</strong>
        </p>
        <Link
          to={{
            pathname: `/post/${props.id}`,
          }}
        >
          <FaLevelUpAlt />
          Abrir post
        </Link>
      </footer>
    </article>
  );
};

export default PostCard;
