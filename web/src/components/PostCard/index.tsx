import React from "react";
import { FaLevelUpAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles.css";

const PostCard: React.FC = () => {
  return (
    <article className="post-item">
      <header>
        <div>
          <strong className="post-id">id: 3</strong>
        </div>
      </header>
      <p>Estou procurando programadores que gostam de programar</p>

      <footer>
        <p>
          Comentários:
          <strong> 200</strong>
        </p>
        <Link to="/post">
          <FaLevelUpAlt />
          Abrir post
        </Link>
      </footer>
    </article>
  );
};

export default PostCard;
