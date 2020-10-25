import React, { useState } from "react";
import {FaPlusCircle} from 'react-icons/fa';
import Header from "../../components/Header";
 import ModalCreatePost from "../../components/ModalCreatePost";
import PostCard from "../../components/PostCard";

import "./styles.css";

const Posts: React.FC = () => {

   const [isModalVisible, setIsModalVisible] =  useState(false)

   const onClick = () => setIsModalVisible(false)

  return (
    <div id="page-post-list" className="container">
      <Header icon="FaHome" title="Crie um post novo e interaja com novos posts">
        <form id="search-posts">
        <div className="new-post"> 
        <button onClick={()=>setIsModalVisible(true)}>
          <FaPlusCircle color="white" size="40px"/>
          <label>Criar novo post</label>
          {/* <ModalCreatePost open={open}/> */}
        </button>
        {isModalVisible ? <ModalCreatePost onClose={()=>setIsModalVisible(false)} /> : null}
        </div>
        
          <div className="input-block">
            <label htmlFor="id">Find by id</label>
            <input type="text" id="user_id"></input>
          </div>
        </form>
        
      </Header>
     
      <main>
      
        <PostCard />
        <PostCard />
        
      </main>
    </div>
  );
};

export default Posts;
