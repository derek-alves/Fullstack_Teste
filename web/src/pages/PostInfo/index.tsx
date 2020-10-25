import React from "react";
import { FaLevelDownAlt } from "react-icons/fa";
import CommentCard from "../../components/CommentCard";
import Header from "../../components/Header";

import "./styles.css";

const PostInfo: React.FC = () => {
  return (
    <div id="page-post-form" className="container">
      <Header icon="FaAccusoft" title="Interaja com essa publicação!" />

      <main>
        <header>
          <div>
            <strong className="post_id">id: 3</strong>
          </div>
        </header>
        <p>Estou procurando programadores que gostam de programar</p>

        <footer>
          <input type="text" placeholder="Comente essa publicação"/>
          <button type="button">
            <FaLevelDownAlt />
            Comentar
          </button>
        </footer>
     

        <div className="comentarios">
            <h3>Comentários</h3>


              <div className="comentario">
                <strong className="post_id">id: 1</strong>
                <p>Qual tipo voce quer? Junior,Senior ou nenhum?</p>  
              </div>     

              <CommentCard id={1} content="Qual tipo voce quer? Junior,Senior ou nenhum?"/>
              <CommentCard id={1} content="Qual tipo voce quer? Junior,Senior ou nenhum?"/>
              <CommentCard id={1} content="Qual tipo voce quer? Junior,Senior ou nenhum?"/>
              <CommentCard id={1} content="Qual tipo voce quer? Junior,Senior ou nenhum?"/>
              <CommentCard id={1} content="Qual tipo voce quer? Junior,Senior ou nenhum?"/>
              <CommentCard id={1} content="Qual tipo voce quer? Junior,Senior ou nenhum?"/>
              <CommentCard id={1} content="Qual tipo voce quer? Junior,Senior ou nenhum?"/>
              <CommentCard id={1} content="Qual tipo voce quer? Junior,Senior ou nenhum?"/>

        </div>
        </main>
    </div>
  );
};

export default PostInfo;
