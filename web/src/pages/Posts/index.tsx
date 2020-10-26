import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Header from "../../components/Header";
import ModalCreatePost from "../../components/ModalCreatePost";

import PostCard, { Card } from "../../components/PostCard";
import api from "../../services/api";

import "./styles.css";

const Posts: React.FC = () => {
  const [dados, setDados] = useState<any>([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    api.get("posts").then((response) => {
      const data = response.data;
      setDados(data);
    });
  }, []);

  return (
    <div id="page-post-list" className="container">
      <Header
        icon="FaHome"
        title="Crie um post novo e interaja com novos posts"
      >
        <form id="search-posts">
          <div className="new-post">
            <button onClick={() => setIsModalVisible(true)}>
              <FaPlusCircle color="white" size="40px" />
              <label>Criar novo post</label>
            </button>
            {isModalVisible ? (
              <ModalCreatePost onClose={() => setIsModalVisible(false)} />
            ) : null}
          </div>
        </form>
      </Header>

      <main>
        {dados.map((posts: Card) => {
          return (
            <PostCard key={posts.id} id={posts.id} message={posts.message} />
          );
        })}
      </main>
    </div>
  );
};

export default Posts;
